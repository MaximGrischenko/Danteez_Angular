import {Component, OnInit} from '@angular/core';
import {DataFromHttpService} from '../../services/data-from-http.service';
import {LogService} from '../../services/log.service';
import {EnquiryClass} from '../../models/EnquiryClass';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
  providers: [DataFromHttpService, LogService]
})

export class SupportComponent implements OnInit {
  user: any;
  enquiry_type: string;
  user_name: string;
  email: string;
  subject: string;
  description: string;

  supportData = new FormData();

  enquiries: EnquiryClass[] = [];
  selectedEnquiry: EnquiryClass;
  isShowOptions: boolean;
  url = './assets/images/placeholder.png';

  response: any;
  done = false;

  constructor(private dataService: DataFromHttpService, private logService: LogService) {
  }

  ngOnInit() {
    const user = sessionStorage.getItem('Logged user');
    this.user = JSON.parse(user);
    this.user_name = `${this.user.firstName} ${this.user.lastName}`;
    this.email = this.user.email;
    this.description = '';

    this.dataService.getEnquiries().subscribe(
      data => {
        this.enquiries = data['data'];
      },
      error => {
        this.logService.add('DataFromHttpService:' + error);
        console.log(error);
      },
      () => {
      }
    );
  }

  onShowOptions() {
    this.isShowOptions = !this.isShowOptions;
  }

  onSelectOption(enquiry: EnquiryClass) {
    this.enquiry_type = (enquiry.name !== 'Other') ? enquiry.name : '';
    this.selectedEnquiry = enquiry;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MAX_SIZE = 5000;
      const file = event.target.files[0];
      const reader = new FileReader();
      let image: any;
      reader.readAsDataURL(file);

      reader.addEventListener('loadend', () => {
        image = new Image();
        image.src = reader.result;
        image.addEventListener('load', () => {
          const size = Math.round(file.size / 1024);
          if (image.width < MAX_WIDTH && image.height < MAX_HEIGHT && size < MAX_SIZE) {
            this.url = reader.result;
            this.supportData.append('file', file, file.name);
          } else {
            alert(`Uploaded image should not exceed 300x300 pixels;\nMaximum size of the uploaded image should not exceed 5MB;\n
            WIDTH: ${image.width} px;
            HEIGHT: ${image.height} px;
            SIZE: ${size} Kb`);
          }
        });
      });
    }
  }

  onSubmit() {
    this.supportData.append('department', this.user.id);
    this.supportData.append('enquiry_type', this.enquiry_type);
    this.supportData.append('user_name', this.user_name);
    this.supportData.append('email', this.email);
    this.supportData.append('subject', this.subject);
    this.supportData.append('description', this.description);

    this.dataService.postSupportForm(this.supportData)
      .subscribe(data => {
          this.response = data['data'].message;
          this.done = true;
          alert(this.response);
        },
        error => {
          this.logService.add('DataFromHttpService:' + error);
          console.log(error);
        },
        () => {
          this.enquiry_type = '';
          this.subject = '';
          this.description = '';
          this.url = './assets/images/placeholder.png';
        }
      );
  }
}

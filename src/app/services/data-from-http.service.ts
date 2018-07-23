import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class DataFromHttpService {
  private apiEndPointServices = 'http://504080.com/api/v1/services/categories';
  private apiEndPointEnquiries = 'http://504080.com/api/v1/directories/enquiry-types';
  private apiEndPointSupport = 'http://504080.com/api/v1/support';

  constructor(private http: HttpClient) {
  }

  getServices(token) {
    const requestHeader = new HttpHeaders().set('Authorization', token);
    return this.http.get(this.apiEndPointServices, {
        headers: requestHeader
      }
    );
  }

  getEnquiries() {
    return this.http.get(this.apiEndPointEnquiries);
  }

  postSupportForm(support: FormData) {
    return this.http.post(this.apiEndPointSupport, support);
  }
}

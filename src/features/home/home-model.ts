import { ObservableObject, batch, computed, observable } from "@legendapp/state";
import { ICourseItem, ICoursesModel, IInstructorTestimonialModel } from "./home-types";
import { Endpoints } from "../../network/Endpoints";
import { RequestMethods, getApiStatus, request } from "../../network/request";

class HomeScreenModel {
    courses$: ObservableObject<ICoursesModel>;
    instructorTestimonials$: ObservableObject<IInstructorTestimonialModel>;

    constructor() {
        this.courses$ = observable<ICoursesModel>({
            apiStatus: 'init'
        });

        this.instructorTestimonials$ = observable<IInstructorTestimonialModel>({
            apiStatus: 'init'
        });
    }

    private fetchAllCourses = async () => {
        const httpConfig = { 
            url: Endpoints.coursesList,
            method: RequestMethods.GET,
        }

        const response = await request(httpConfig);
        if(response.status === "success"){
            const serverResponse: ICourseItem[] = response.data?.result ;
            batch(() => {
                this.courses$.apiStatus.set('success') ;
                this.courses$.data?.set?.(serverResponse);
            })
        }
        else {
            batch(() => {
                this.courses$.apiStatus.set('error');
                this.courses$.error?.errorCode?.set?.(response.statusCode);
                this.courses$.error?.errorMessage?.set?.(response.message);
            })
        }
    }

    private fetchInstructorTestimonials = async () => {
        const httpConfig = {
            url: Endpoints.instructorTestimonials,
            method: RequestMethods.GET
        }

        const response = await request(httpConfig);
        if(response.status === "success"){
            const serverResponse = response.data?.result; 
            batch(() => {
                this.instructorTestimonials$.set({
                    apiStatus: 'success',
                    data: serverResponse
                })
            })
        }
        else {
            // TODO: show a tosat message
        }
    };

    views_courses = computed(() => getApiStatus(this.courses$.apiStatus.get()));

    views_instructor_testimonials = computed(() => getApiStatus(this.instructorTestimonials$.apiStatus.get()))

    actions = {
        fetchAllCourses: this.fetchAllCourses,
        fetchInstructorTestimonials: this.fetchInstructorTestimonials
    }
}

export function createHomeScreenModel(){
    return new HomeScreenModel();
}
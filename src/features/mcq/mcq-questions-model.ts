import { ObservableObject, ObservablePrimitive, computed, observable } from "@legendapp/state";
import { ApiStatus, IErrorResponse } from "../../network/network.types";
import { getApiStatus } from "../../network/request";

export interface IMcqQuestion {
    description: string;
    options: string[];
    score: string | number;
    snippetCode: string;
    title: string;
  }

const mockQuestionsResponse: IMcqQuestion[] = [
    {
      description: "What will be logged to the console?",
      title: "Closure Variable Scope",
      options: ["10", "20", "100", "undefined"],
      score: "4",
      snippetCode: `var x = 10;
      function foo() {
         var x = 20;
         function bar() {
            console.log(x);
         }
         return bar;
      }
      var baz = foo();
      baz();`,
    },
    {
      description: "What will be logged to the console?",
      title: "Closure Function Invocation",
      options: ["30", "undefined", "Error", "10"],
      score: "4",
      snippetCode: `function outer() {
         var x = 30;
         function inner() {
            console.log(x);
         }
         return inner;
      }
      var closureFunc = outer();
      closureFunc();`,
    },
    {
      description: "What will be the output of the closure function?",
      title: "Scope Chain in Closure",
      options: ["30", "Error", "undefined", "10"],
      score: "4",
      snippetCode: `var a = 10;
      function outer() {
         var b = 20;
         return function inner() {
            return a + b;
         };
      }
      var closureFunc = outer();
      var result = closureFunc();`,
    },
    {
      description: "What will be the value of 'count' after execution?",
      title: "Closure Counter",
      options: ["3", "2", "1", "0"],
      score: "4",
      snippetCode: `function counter() {
         var count = 0;
         return function () {
            count++;
            console.log(count);
         };
      }
      var increment = counter();
      increment();
      increment();
      increment();`,
    },
    {
      description: "What will be the output of the following code?",
      title: "Global and Local Variables",
      options: ["10", "100", "20", "30"],
      score: "4",
      snippetCode: `var a = 10;
      function test() {
         var a = 20;
         function inner() {
            console.log(a);
         }
         return inner;
      }
      var closureFunc = test();
      closureFunc();`,
    },
    {
      description: "What is a closure in JavaScript?",
      title: "Closure Definition",
      options: [
        "A built-in JavaScript function",
        "A way to create private variables",
        "A type of loop",
        "A syntax error"
      ],
      score: "4",
      snippetCode: `// No code snippet for this question.`,
    },
    {
      description: "What is the primary benefit of closures in JavaScript?",
      title: "Closure Benefits",
      options: [
        "Encapsulation and data privacy",
        "Faster code execution",
        "Improved memory management",
        "Simpler code syntax"
      ],
      score: "4",
      snippetCode: `// No code snippet for this question.`,
    },
    {
      description: "What is a lexical scope in JavaScript?",
      title: "Lexical Scope",
      options: [
        "A scope defined by curly braces",
        "A scope defined by the 'var' keyword",
        "A scope determined by the location of a variable's declaration",
        "A scope defined within a function only"
      ],
      score: "4",
      snippetCode: `// No code snippet for this question.`,
    },
    {
      description: "What will be logged to the console?",
      title: "Closure Variable Scope",
      options: ["10", "20", "100", "undefined"],
      score: "4",
      snippetCode: `var x = 10;
function foo() {
   var x = 20;
   function bar() {
      console.log(x);
   }
   return bar;
}
var baz = foo();
baz();`,
    },
    {
      description: "What will be logged to the console?",
      title: "Closure Variable Scope",
      options: ["10", "20", "100", "undefined"],
      score: "4",
      snippetCode: `var x = 10;
      function foo() {
         var x = 20;
         function bar() {
            console.log(x);
         }
         return bar;
      }
      var baz = foo();
      baz();`,
    },
    {
      description: "What will be logged to the console?",
      title: "Closure Variable Scope",
      options: ["10", "20", "100", "undefined"],
      score: "4",
      snippetCode: `var x = 10;
      function foo() {
         var x = 20;
         function bar() {
            console.log(x);
         }
         return bar;
      }
      var baz = foo();
      baz();`,
    },
    {
      description: "What will be logged to the console?",
      title: "Closure Variable Scope",
      options: ["10", "20", "100", "undefined"],
      score: "4",
      snippetCode: `var x = 10;
      function foo() {
         var x = 20;
         function bar() {
            console.log(x);
         }
         return bar;
      }
      var baz = foo();
      baz();`,
    },
    {
      description: "What will be logged to the console?",
      title: "Closure Variable Scope",
      options: ["10", "20", "100", "undefined"],
      score: "4",
      snippetCode: `var x = 10;
      function foo() {
         var x = 20;
         function bar() {
            console.log(x);
         }
         return bar;
      }
      var baz = foo();
      baz();`,
    },
    {
      description: "What will be logged to the console?",
      title: "Closure Variable Scope",
      options: ["10", "20", "100", "undefined"],
      score: "4",
      snippetCode: `var x = 10;
      function foo() {
         var x = 20;
         function bar() {
            console.log(x);
         }
         return bar;
      }
      var baz = foo();
      baz();`,
    },
  ];

interface IMcqQuestionsResponse {
    result: IMcqQuestion[];
}

interface IMcqQuestionsModel {
    data?: IMcqQuestionsResponse;
    apiStatus: ApiStatus;
    error?: IErrorResponse;
}

export interface IAnswer {
   selectedOptionIndex: number;
}

class McqQuestionsModel {
    obs: ObservableObject<IMcqQuestionsModel>;
    topicId: string;
    questionId: string;
    activeQuestionIndex: ObservablePrimitive<number>;
    obs_answers: ObservableObject<IAnswer[]>;

    constructor(){
        this.obs = observable<IMcqQuestionsModel>({
            apiStatus: 'init',
        });
        this.activeQuestionIndex = observable<number>(-1);
        this.obs_answers = observable<IAnswer[]>([]);
    }

    private fetchMcqQuestions = () => {
        this.obs.apiStatus.set('pending');
        setTimeout(() => {
            this.obs.apiStatus.set("success");
            this.obs.data?.set?.({result: mockQuestionsResponse});
            if(mockQuestionsResponse.length > 0){
               this.activeQuestionIndex.set(0);
               // Intialisation of answers array with n number of questions
               this.obs_answers.set(new Array(mockQuestionsResponse.length));
               console.log(this.obs_answers.peek().length);
            }
        }, 2000);
    }

    private changeActiveQuestion = (index: number) => {
      this.activeQuestionIndex.set(index);
    }

    private answerQuestion = ({questionIndex, selectedOptionIndex}: {questionIndex: number; selectedOptionIndex: number}) => {
         this.obs_answers[questionIndex].set({selectedOptionIndex});
    }

    actions = {
        fetchMcqQuestions: this.fetchMcqQuestions,
        changeActiveQuestion: this.changeActiveQuestion,
        answerQuestion: this.answerQuestion,
    }

    obs_views = computed(() => getApiStatus(this.obs.apiStatus.get()))
}

export function createMcqQuestionsModel() {
    return new McqQuestionsModel();
}
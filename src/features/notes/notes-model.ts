import React from "react";
import { NotFound } from "../../components/not-found/NotFound";
import {ObservableObject, observable} from '@legendapp/state';
import { BasicsOfJavaScript } from "./content/basics-of-js";
import { Functions } from "./content/functions";

interface ISubTopic {
    subTopicName: string;
    id: string;
}

interface ITopic {
    topicName: string;
    subTopicsList: ISubTopic[];
    Component: React.FC<any>;
}

export const TopicsList: ITopic[] = [
    {
        topicName: 'Basics of JavaScript',
        subTopicsList: [
            {
                subTopicName: 'Variables and Data types',
                id: 'variables-data-types'
            },
            {
                subTopicName: 'Operators',
                id: 'operators'
            },
            {
                subTopicName: 'Conditional Statements',
                id: 'conditional-statements'
            },
            {
                subTopicName: 'Loops',
                id: 'loops'
            }
        ],
        Component:BasicsOfJavaScript
    },
    {
        topicName: 'Functions',
        subTopicsList: [
            {
                subTopicName: 'Syntax and Usage',
                id:'syntax-and-usage'
            },
            {
                subTopicName: 'Execution flow of JS functions in CallStack',
                id: 'execution-flow'
            },
            {
                subTopicName: 'Primitive and Non Primitve data types',
                id: 'primitive-non-primitive'
            },
            {
                subTopicName: 'Call by value and Call by reference.',
                id: 'callby-value-reference'
            },
            {
                subTopicName: 'Hoisiting',
                id: 'hoisting'
            }
        ],
        Component:Functions
    },
    {
        topicName: 'Scope Chain & Closures',
        subTopicsList: [
            {
                subTopicName: 'Block Scope',
                id:'block-scope'
            },
            {
                subTopicName: 'Context Scope',
                id: 'context-scope'
            },
            {
                subTopicName: 'Method References',
                id: 'method-references'
            },
            {
                subTopicName: 'CallBack Functions',
                id: 'callback-functions'
            },
            {
                subTopicName: 'Higher Order Functions',
                id: 'higher-order-functions'
            },
            {
                subTopicName: 'Closures',
                id: 'closures'
            }
        ],
        Component:NotFound
    },
    {
        topicName: 'Strings , Arrays & Objects',
        subTopicsList: [
            {
                subTopicName: 'String Methods',
                id: 'string-methods'
            },
            {
                subTopicName: 'Arrays Methods',
                id: 'array-methods',
            },
            {
                subTopicName: 'Iterations on Arrays , Strings & Objects',
                id:'iterators'
            },
            {
                subTopicName: 'Spread Operator',
                id: 'spread-operators'
            },
            {
                subTopicName: 'Array & Object Destructuring',
                id: 'destructuring'
            }
        ],
        Component:NotFound
    },
    {
        topicName: 'Array Higher Order Functions',
        subTopicsList: [
            {
                subTopicName: 'forEach',
                id: 'foreach'
            },
            {
                subTopicName: 'map',
                id: 'map'
            },
            {
                subTopicName: 'filter',
                id: 'filter'
            },
            {
                subTopicName: 'reduce',
                id: 'reduce'
            }
        ],
        Component:NotFound
    },
    {
        topicName: 'this keyword',
        subTopicsList: [
            {
                subTopicName: 'What the F**k is this ?',
                id: 'root-this'
            },
            {
                subTopicName: 'Global context and this',
                id: 'global-this'
            },
            {
                subTopicName: 'Functional Context and this',
                id: 'functional-this'
            },
            {
                subTopicName: 'arrow functions and this',
                id: 'arrow-this'
            },
            {
                subTopicName: 'Constructor functions and this',
                id: 'constructor-this'
            },
            {
                subTopicName: 'Classes and this',
                id: 'classes-this'
            },
            {
                subTopicName: 'call, apply, bind & this',
                id: 'binding-this'
            }
        ],
        Component:NotFound
    },
    {
        topicName: 'Document Object Model',
        subTopicsList: [
            {
                subTopicName: 'What is DOM ?',
                id: 'html-dom'
            },
            {   
                subTopicName: 'Nodes Retrieval from DOM tree',
                id: 'retrieval'
            },
            {
                subTopicName: 'DOM manipulations',
                id: 'dom-manipulations'
            },
            {
                subTopicName: 'DOM Events & Event handling',
                id: 'events'
            },
            {
                subTopicName: 'Event Bubbling & Capturing',
                id: 'bubbling-capturing'
            },
            {
                subTopicName: 'Event Delegation',
                id: 'delegation'
            },
            {
                subTopicName: 'Storage Elements',
                id: 'storage-elements'
            }
        ],
        Component:NotFound
    },
    {
        topicName: 'Aynchronous JavaScript',
        subTopicsList: [
            {
                subTopicName: 'Event Loop, Callback Queue & Microtask Queue',
                id: 'event-loop'
            },
            {
                subTopicName: 'Promise',
                id: 'promise'
            },
            {
                subTopicName: 'Promise Handling. then, catch, finally',
                id: 'promise-handling'
            },
            {
                subTopicName: 'Promise Chaining',
                id:'promise-chaining'
            },
            {
                subTopicName: 'Promise Concurrency Methods',
                id: 'concurrency-methods'
            },
            {
                subTopicName: 'Exception Handling. try-catch',
                id: 'exception-handling'
            },
            {
                subTopicName: 'async / await',
                id: 'async-await'
            }
        ],
        Component:NotFound
    },
    {
        topicName:'Date API',
        subTopicsList: [
            {
                subTopicName: 'Date Object and Epoch time',
                id: 'epoch-time'
            }
        ],
        Component:NotFound
    },
    {
        topicName: 'fetch API',
        subTopicsList: [
            {
                subTopicName: 'Basic http methods, and http status Codes',
                id:'http'
            },
            {
                subTopicName: 'Data Sharing',
                id:'data-sharing'
            },
            {
                subTopicName: 'Response handling with Promises',
                id: 'handling-promise'
            },
            {
                subTopicName: 'Response handling with async/await',
                id: 'handling-async-await'
            }
        ],
        Component:NotFound
    }
]

export interface ISubTopicState {
    topicIndex: number; 
    subTopicIndex: number
}

export class NotesModel {
    obs: ObservableObject<ISubTopicState>;

    constructor(){
        this.obs = observable<ISubTopicState>({
            topicIndex: 0,
            subTopicIndex: 0
        });
    }

    private updateActiveTopicSection = (state: ISubTopicState) => {
        this.obs.set(state);
    }

    actions = {
        updateActiveTopicSection: this.updateActiveTopicSection
    }
}

export function createNotesModel(){
    return new NotesModel();
}
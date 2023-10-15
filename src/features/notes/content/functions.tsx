import React, { useContext } from "react";
import { NotesContext } from "..";
import { TopicsList } from "../notes-model";
import { ReadEditor } from "../../../components/Read-Editor";
import { codeSnippets, functionsCodeSnippets } from "../codesnippets";

export const Functions = () => {
  const notesModel = useContext(NotesContext);
  const topicIndex = notesModel.obs.topicIndex.peek();

  const topicName = TopicsList[topicIndex].topicName;
  const subTopics = TopicsList[topicIndex].subTopicsList;
  console.log("mounted");

  return (
    <section className="notes-content-body">
      <h1>{topicName}</h1>
      <div className="section">
        <h2 id={subTopics[0].id}>{subTopics[0].subTopicName}</h2>
        <p>
          Functions are blocks of code that can be defined and executed where
          ever needed just by calling. Using functions we can re use the code,
          increase the readability of the code.
        </p>
        <ul>
          <li>
            A function is a piece of code that can take some data as input
            (parameters) and may return some result.
          </li>
          <li>Functions in javascript are just like all other variables.</li>
          <li>
            There are two ways to declare function in javascript.
            <span className="code">Named functions</span> and
            <span className="code">Anonymous Functions</span>
          </li>
          <li>
            <span className="code">Named functions</span> can be declared by
            using <span className="code">function</span> keyword followed by the
            name of function , parameters list enclosed by round braces
            <span className="code">`(` `)`</span> and javascript statements
            enclosed by curly braces.
          </li>
        </ul>
        <ReadEditor
          value={functionsCodeSnippets.function_declaration.code}
          height={functionsCodeSnippets.function_declaration.height}
        />
        <ul>
          <li>
            Functions in javascript are non primitive data types i.e every
            function will be stored in the heap memory and the function variable
            will hold that memory address.
          </li>
          <li>
            In the above example the variable
            <span className="code">callme</span> holds a heap memory reference.
            <span className="code">callme = #2802</span>
          </li>
          <li>
            As functions are just like the regular variables, we can create
            functions data types by using
            <span className="code">let, var, const</span> keywords.
          </li>
        </ul>
        <ReadEditor
          value={functionsCodeSnippets.anonymous_function.code}
          height={functionsCodeSnippets.anonymous_function.height}
        />
        <ul>
          <li>
            A function without any name assigned to a variable is called as
            <span className="code">Anonymous functions</span>.
          </li>
          <li>
            In the above example the function value of variable
            <span className="code">b</span> is an
            <span className="code">Anonymous function</span>.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2 id={subTopics[1].id}>{subTopics[1].subTopicName}</h2>
        <p>
          In JavaScript, the execution flow of functions is managed by the call
          stack (software present inside javascript engine), which is a data
          structure that keeps track of function calls and their execution
          contexts. Understanding the execution flow of JavaScript functions in
          the call stack is crucial for grasping how JavaScript code works.
        </p>

        <ul>
          <li>
            Every javascript code will have two types of statements.
            <span className="code">Global Statements</span> and
            <span className="code">Local statements</span>
          </li>
          <li>
            <span className="code">Global Statements</span> are the lines of
            code present outside of a function.
          </li>
          <li>
            <span className="code">Local Statements</span> are the lines of code
            present inside a function.
          </li>
        </ul>
        <ReadEditor
          value={functionsCodeSnippets.scope_statements.code}
          height={functionsCodeSnippets.scope_statements.height}
        />
        <ul>
          <li>
            To understand javascript , it's essential to know about how
            javascript code gets executed internally.
          </li>
          <li>
            <span className="code">Call Stack</span> keeps track/manages the
            entire execution of javascript code by dividing code into two types
            of contexts <span className="code">Global Execution Context</span>
            and <span className="code">Functional Execution Context</span>
          </li>
        </ul>
        <div>
          <h3>Global Execution Context:</h3>
          <ul>
            <li>
              When a JavaScript program starts running, the global execution
              context is created at the bottom of the Call Stack.
            </li>
            <li>
              The global execution context represents the code that exists
              outside of any function(Global Statements).
            </li>
            <li>
              It contains variables and functions declared in the global
              scope(global variables).
            </li>
          </ul>
          <h3>Functional Execution Context</h3>
          <ul>
            <li>
              When a function is invoked/called a brand new execution context
              will be created on top of the current execution context.That newly
              created context can be called as functional execution context.
            </li>
            <li>
              This newly created functional execution context will manage the
              execution flow of all the lines of code present inside that
              context.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 id={subTopics[2].id}>{subTopics[2].subTopicName}</h2>
        <table className="table">
          <thead>
            <tr className="row-head">
              <th>Primitive Data types</th>
              <th>Non Primitive Data types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Primitive data types are most basic and fundamental data types
                in javascript. They represent single values and are immutable
                (can not be changed).
              </td>
              <td>
                Non primitive or Reference data types are complex data types.
                Which are build by using primitive data types.
              </td>
            </tr>
            <tr>
              <td>
                <div className="horizantal-list">
                  <span className="code">1. Number</span>
                  <span className="code">2. Boolean</span>
                  <span className="code">3. String</span>
                  <span className="code">4. Undefined</span>
                  <span className="code">5. Symbol</span>
                  <span className="code">6. BigInt</span>
                </div>
              </td>
              <td>
                <div className="horizantal-list">
                  <span className="code">1. Arrays</span>
                  <span className="code">2. Objects</span>
                  <span className="code">3. Functions</span>
                  <span className="code">
                    4. All other custom data types( instances of a class)
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Are stored in the Stack Memory of RAM.</td>
              <td>Are Stored in the HEAP Memory of RAM.</td>
            </tr>
            <tr>
              <td>Variables directly holds the value.</td>
              <td>
                Variables holds the HEAP memory reference instead of holding the
                data directly.
              </td>
            </tr>
            <tr>
              <td className="code-cell">
                <ReadEditor
                  value={functionsCodeSnippets.primitive_example.code}
                  height={functionsCodeSnippets.primitive_example.height}
                />
              </td>
              <td className="code-cell">
                <ReadEditor
                  value={functionsCodeSnippets.non_primitive_example.code}
                  height={functionsCodeSnippets.non_primitive_example.height}
                />
              </td>
            </tr>
            <tr>
              <td>
                The variables above <span className="code">a</span> and
                <span className="code">b</span> holds the data directly and that
                data will be stored with in the Stack Memory
              </td>
              <td>
                The variables above <span className="code">a</span>,
                <span className="code">arr</span> and
                <span className="code">f</span> will hold the HEAP memory
                addresses/references where the actual data gets stored.
                <br />
                <p>
                  <span className="code">a = #100</span> ,
                  <span className="code">arr = #300</span> and
                  <span className="code">f = #800</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 id={subTopics[3].id}>{subTopics[3].subTopicName}</h2>
        <p>
          Now we understood what are primitive and non-primitive data
          types.Let's take a look at how does the comparision works for these
          two types of data.
        </p>
        <table className="table">
          <tr>
            <td className="code-cell">
              <ReadEditor
                value={functionsCodeSnippets.val_comparision.code}
                height={functionsCodeSnippets.val_comparision.height}
              />
            </td>
            <td className="code-cell">
              <ReadEditor
                value={functionsCodeSnippets.ref_comparision.code}
                height={functionsCodeSnippets.ref_comparision.height}
              />
            </td>
          </tr>
          <tr>
            <td>
              The variables `a` and `b` directly holds the value
              <span className="code">20</span> , so result comes out as true
            </td>
            <td>
              The variables `a` and `b` both are non primitive data types they
              will point to the HEAP memory references
              <span className="code">#100</span> and
              <span className="code">#200</span> respectively. <br />
              <br />
              Therefore the comparision of these two
              <span className="code">#100 == #200</span> which is absolutely
              false.
            </td>
          </tr>
        </table>
        <h3>Differences Between Callby Value and Callby Reference</h3>
        <table className="table section">
          <tr>
            <th>Call by value</th>
            <th>Call by reference</th>
          </tr>
          <tr>
            <td>
              Calling/Invoking a function by passing value as an argument.
            </td>
            <td>
              Calling/Invoking a function by passing the reference(memory
              address) as an argument.
            </td>
          </tr>
          <tr>
            <td className="code-cell">
              <ReadEditor
                value={functionsCodeSnippets.call_by_value.code}
                height={functionsCodeSnippets.call_by_value.height}
              />
            </td>
            <td className="code-cell">
              <ReadEditor
                value={functionsCodeSnippets.call_by_reference.code}
                height={functionsCodeSnippets.call_by_reference.height}
              />
            </td>
          </tr>
          <tr>
            <td>
              Above, The variable <span className="code">x</span> holds
              <span className="code">20</span>, when it is passed as an argument
              to <span className="code">func</span>
              the corresponding parameter
              <span className="code">a</span> will capture a copy of x's value
              i.e <span className="code">20</span>.
            </td>
            <td>
              Above, The variable <span className="code">x</span> holds the
              reference <span className="code">#200</span> of the object
              <span className="code">{`{name:"aravind"}`}</span>, when it is
              passed as an argument to the <span className="code">func</span>
              the corresponding parameter <span className="code">a</span> will
              capture the same memory reference.
            </td>
          </tr>
          <tr>
            <td className="code-cell">
              <ReadEditor
                value={functionsCodeSnippets.call_by_value_ex2.code}
                height={functionsCodeSnippets.call_by_value_ex2.height}
              />
            </td>
            <td className="code-cell">
              <ReadEditor
                value={functionsCodeSnippets.call_by_reference_ex2.code}
                height={functionsCodeSnippets.call_by_reference_ex2.height}
              />
            </td>
          </tr>
          <tr>
            <td>
              If we modify the variable <span className="code">a</span> inside
              the function, the outer variable <span className="code">x</span>
              will not be effected.
            </td>
            <td>
              Mutating the variable <span className="code">a</span> inside the
              function will effect the outer variable
              <span className="code">x</span> as they both were pointing to same
              memory reference.
            </td>
          </tr>
        </table>
      </div>

      <div className="section">
        <h2 id={subTopics[4].id}>{subTopics[4].subTopicName}</h2>
        <h3>
          Differences between <span className="code">let</span>,
          <span className="code">var</span> and
          <span className="code">const</span>
        </h3>
        <p>
          Before we understand <span className="code">Hoisiting</span> one has
          to understand the differences between
          <span className="code">let</span>, <span className="code">var</span>
          and <span className="code">const</span>. All of these three keywords
          are used to create variables.
        </p>
        <div style={{ overflow: "scroll", padding: 20 }}>
          <table className="table">
            <thead>
              <tr>
                <th>var</th>
                <th>let</th>
                <th>const</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>this keyword is a part of early versions of javascript.</td>
                <td>
                  Introduced in
                  <span className="code">ES6(ECMA Script version 6)</span> in
                  the year 2015.
                </td>
                <td>
                  Introduced in
                  <span className="code">ES6(ECMA Script version 6)</span> in
                  the year 2015.
                </td>
              </tr>
              <tr>
                <td>
                  Intialisation during variable declaration is Optional.
                  <ReadEditor value={"var x;"} height={"80px"} />
                </td>
                <td>
                  Intialisation during variable declaration is Optional.
                  <ReadEditor value={"let x;"} height={"80px"} />
                </td>
                <td>
                  Intialisation is mandatory during variable declaration.
                  <ReadEditor value={"const x = 10;"} height={"80px"} />
                </td>
              </tr>
              <tr>
                <td>
                  Can be updated after variable declaration.
                  <ReadEditor
                    value={"var x = 20; \nx = 30; \nx = 'aravind' "}
                    height="120px"
                  />
                </td>
                <td>
                  Can be updated after variable declaration.
                  <ReadEditor
                    value={"let x = 20; \nx = 30; \nx = 'aravind' "}
                    height="140px"
                  />
                </td>
                <td>
                  Can not be updated after variable declaration. as it is a
                  constant.
                  <ReadEditor
                    value={"const x = 20; \nx = 30; // Invalid Operation "}
                    height="120px"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Tolerates redeclaration of variable.
                  <ReadEditor
                    value={
                      "var x = 20; \nvar x = 30; \nconsole.log(x); // output: 30 "
                    }
                    height="120px"
                  />
                </td>
                <td>
                  Redeclaration is not allowed.
                  <ReadEditor
                    value={
                      "let x = 20; \nlet x = 30;// Inavlid Operation\n// re-declaration is not allowed "
                    }
                    height="120px"
                  />
                </td>
                <td>
                  Redeclaration is not allowed.
                  <ReadEditor
                    value={
                      "const x = 20; \nconst x = 30;//Inavlid Operation\n// re-declaration is not allowed "
                    }
                    height="120px"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Can be accessed before declaration of variable.
                  <ReadEditor
                    value={
                      "console.log(x); // undefined\nvar x = 20;\nconsole.log(x);// 20"
                    }
                    height="120px"
                  />
                </td>
                <td>
                  Can not be accessed before the declaration.
                  <ReadEditor
                    value={
                      "// Cannot access 'x' before intialisation.\nconsole.log(x);\nlet x = 20; "
                    }
                    height="120px"
                  />
                </td>
                <td>
                  Can not be accessed before the declaration.
                  <ReadEditor
                    value={
                      "// Cannot access 'x' before intialisation.\nconsole.log(x);\nconst x = 20; "
                    }
                    height="120px"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>The Process of Hoisting...</h3>
          <ul>
            <li>
              Whenever we access <span className="code">var</span> declared
              variable before intialisation we get the output as
              <span className="code">undefined</span>. whereas for
              <span className="code">let</span> and
              <span className="code">const</span>
              declared variables we get an error which says
              <span className="code">
                Cannot access variable before intialisation
              </span>
              . This happens due to the process of
              <span className="code">hoisiting</span>.
            </li>
            <li>
              When a JavaScript engine runs JavaScript code, it first goes
              through a process that includes parsing and preparing the code for
              execution. During this process, the engine identifies variable and
              function declarations and allocates memory space for them. This is
              what is commonly referred to as
              <span className="code">Hoisting</span>.
            </li>
            <li>
              During the creation phase, variables will be initialized with
              specific values, as shown below.
            </li>
          </ul>

          <table className="table">
            <thead>
              <tr>
                <th>let</th>
                <th>const</th>
                <th>var</th>
                <th>function</th>
                <th>class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="code">unavailable</span> : variable gets
                  created but no data be assigned.
                </td>
                <td>
                  <span className="code">unavailable</span> : variable gets
                  created but no data be assigned.
                </td>
                <td>
                  <span className="code">undefined</span>
                </td>
                <td>
                  <span className="code">actual function value</span>
                </td>
                <td>
                  <span className="code">unavailable</span> : variable gets
                  created but no data be assigned.
                </td>
              </tr>
              <tr>
                <td>
                  Can not be accessed before intialisation statement executes as
                  it will be inside the
                  <span className="code">Temporal Dead Zone (TDZ)</span>
                </td>
                <td>
                  Can not be accessed before intialisation statement executes as
                  it will be inside the
                  <span className="code">Temporal Dead Zone (TDZ)</span>
                </td>
                <td>
                  Can be accessed before the intialisation, But it will have
                  <span className="code">undefined</span> value before
                  intialisation statement executes.
                </td>
                <td>
                  Can be accessed before intialisation with the actual value as
                  this value gets hoisted fully during the creation phase
                  itself.
                </td>
                <td>
                  Can not be accessed before intialisation statement executes as
                  it will be inside the
                  <span className="code">Temporal Dead Zone(TDZ)</span>.
                </td>
              </tr>
            </tbody>
          </table>

          <ReadEditor
            value={functionsCodeSnippets.hoisting_let.code}
            height={functionsCodeSnippets.hoisting_let.height}
          />
        </div>
      </div>
    </section>
  );
};

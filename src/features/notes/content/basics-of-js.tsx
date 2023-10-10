import React, { useContext } from "react";
import { NotesContext } from "../index";
import { TopicsList } from "../notes-model";
import { codeSnippets } from "../codesnippets";
import { observer } from "@legendapp/state/react";
import { ReadEditor } from "../../../components/Read-Editor";

export const BasicsOfJavaScript = observer(() => {
  const notesModel = useContext(NotesContext);
  const topicIndex = notesModel.obs.topicIndex.peek();

  const topicName = TopicsList[topicIndex].topicName;
  const subTopics = TopicsList[topicIndex].subTopicsList;

  return (
    <div className="notes-content-body">
      <h1>{topicName}</h1>
      <section className="section">
        <h2 id={subTopics[0].id}>{subTopics[0].subTopicName}</h2>
        <p>
          JavaScript data types into two main groups: primitive data types and
          reference data types
        </p>
        {/* Primitive Data types */}
        <h3>Primitive Data Types</h3>
        <p>Below are the Primitive data types or simple data types.</p>
        <div>
          <ol>
            <li>
              <h3>Number</h3>
              <ul type="disc">
                <li>
                  The Number data type can represent a wide range of numeric
                  values, including integers , float numbers.
                </li>
                <li>
                  Examples: <span className="code">10</span> ,
                  <span className="code">10.89</span> ,
                  <span className="code" title="positive infinity">
                    Infinity
                  </span>
                  ,
                  <span className="code" title="negetive infinity">
                    -Infinity
                  </span>
                  ,
                  <span className="code" title="Not A Number">
                    NaN
                  </span>{" "}
                  etc...
                </li>
                <li>Number data type has infinite possible values.</li>
              </ul>
            </li>
            <li>
              <h3>String</h3>
              <ul type="disc">
                <li>
                  Represents sequences of characters enclosed in single quotes
                  <span className="code">'</span> , double quotes
                  <span className="code">"</span> or backticks
                  <span className="code">`</span>.
                </li>
                <li>
                  Examples:
                  <span className="code">let name = "aravind"</span>
                  <span className="code">let language = 'JavaScript'</span>
                  <span className="code">let college = `NIT Warangal`</span>
                </li>
                <li>
                  Charecters of a string can be accessed by using zero based
                  indexing.
                </li>
                <li>
                  <span className="code">let x = "aravind"</span> in this
                  <span className="code">x[3]</span> gives
                  <span>v</span> , <span className="code">x[0]</span> gives
                  <span className="code">a</span> and so on..
                </li>
                <li>
                  Strings in JavaScript are immutable which means we can't
                  change a character at a given index.
                  <span className="code">x[2] = 'Y'</span> will have no effect.
                </li>
                <li>
                  two or more strings can be concatenated/combined using plus
                  operator.
                </li>
                <li>
                  Example: <span className="code">"abc" + "mno"</span> will give{" "}
                  <span className="code">"abcmno"</span>.
                </li>
                <li>String data type has infinite possible values.</li>
              </ul>
            </li>
            <li>
              <h3>Undefined</h3>
              <ul type="disc">
                <li>
                  Represents a variable that has been declared but has not been
                  assigned a value yet.
                </li>
                <li>
                  Variables declared without an initial value automatically have
                  the value undefined.
                </li>
                <li>
                  <span className="code">
                    let x ; // x will be intialised with undefined by default.
                  </span>
                </li>
                <li>
                  Undefined data type has only one possible value which is{" "}
                  <span className="code">undefined</span>.
                </li>
              </ul>
            </li>
            <li>
              <h3>Boolean</h3>
              <ul type="disc">
                <li>
                  Boolean data type has two possible values{" "}
                  <span className="code">true</span> and{" "}
                  <span className="code">false</span>.
                </li>
              </ul>
            </li>
          </ol>
          <ReadEditor
            value={codeSnippets.primitive_data_types.code}
            height={codeSnippets.primitive_data_types.height}
          />

          {/* Non Primitive data types */}
          <h3>Non Primitive Data Types</h3>
          <p>
            Non Primitive datatypes are also called as reference data types.
            Arrays,Objects and User defined datatypes will come under this
            section.
          </p>
          <ol>
            <li>
              <h4>Arrays | Array Literals</h4>
              <ul type="disc">
                <li>
                  Arrays are used to store multiple data into a single variable.
                </li>
                <li>
                  Arrays are inherently heterogeneous, allowing them to store
                  elements of diverse data types as elements by default.
                </li>
                <li>
                  Example:
                  <span className="code">
                    let arr = [ 10, undefined, true, "abc", null ]
                  </span>
                </li>
                <li>
                  We can use zero based indexing just like strings to extract
                  the elements of an array.
                  <span className="code">
                    let arr = [10, 20, true, "aravind" ]
                  </span>{" "}
                  In this array{" "}
                  <span className="code">
                    arr[0] =&gt; 10 and arr[3] =&gt; "aravind"
                  </span>
                </li>
                <li>
                  Arrays are mutable unlike strings. which means one can change
                  the elements of an array.
                  <span className="code">arr[0] = 200;</span> this statement
                  updates the element at index 0 to be 200.
                </li>
                <li>
                  Arrays in JavaScript are dynamic, meaning they can grow or
                  shrink as needed. However, this flexibility can lead to arrays
                  using a significant amount of memory. To accommodate this,
                  arrays are typically stored in the heap memory, which is
                  larger than the stack memory. Stack memory is reserved for
                  primitive variables that require less space.
                </li>
                <li>
                  When you create an array in JavaScript, the actual array data
                  is stored in the heap memory, while the variable holding the
                  array only stores a reference to that data in the heap.
                </li>
                <li>
                  <span className="code">let arr = [10, 20]</span> in this the
                  data <span className="code">[10, 20]</span> will be stored at
                  some heap memory address/reference and the variable arr holds
                  that address/reference.
                </li>
              </ul>
            </li>
            <li>
              <h4>Objects | Object Literals</h4>
              <ul type="disc">
                <li>
                  Objects holds the data in a key:value pair format.Every key
                  has to be unique in a given object.
                </li>
                <li>
                  Example:
                  <span className="code">{`let obj = {name: 'aravind', age: 22}`}</span>
                  . In this the keys acts just like indices in the case of
                  arrays.
                </li>
                <li>
                  There are two ways to retrive the values of a key in an
                  Object. Using dot(.) notation and Using indexing notation.
                </li>
                <li>
                  <span className="code">{`let obj = {name: 'aravind', age: 22}`}</span>{" "}
                  in this{" "}
                  <span className="code">obj.name =&gt; "aravind" </span> and{" "}
                  <span className="code">obj["name"] =&gt; "aravind"</span>
                </li>
                <li>
                  Objects are also mutable just like arrays i.e One can change
                  the values of a given key.
                  <span className="code">obj["age"] = 33 or obj.age = 33</span>
                  will update the value of `age` key to 33.
                </li>
                <li>
                  Objects in JavaScript are dynamic, meaning they can grow or
                  shrink as needed. However, this flexibility can lead to
                  Objects using a significant amount of memory. To accommodate
                  this, Objects are typically stored in the heap memory, which
                  is larger than the stack memory. Stack memory is reserved for
                  primitive variables that require less space.
                </li>
                <li>
                  When you create an object in JavaScript, the actual object
                  data is stored in the heap memory, while the variable holding
                  the object only stores a reference to that data in the heap.
                </li>
              </ul>
            </li>
          </ol>
          <ReadEditor
            value={codeSnippets.non_primitive_data_types.code}
            height={codeSnippets.non_primitive_data_types.height}
          />
        </div>
      </section>

      <section className="section">
        <h2 id={subTopics[1].id}>{subTopics[1].subTopicName}</h2>
        <p>Operators in javascript are classified into 3 types.</p>
        <ol>
          <li>
            <h4>
              Unary Operators <span className="code">++, --</span>
            </h4>
            <ReadEditor
              value={codeSnippets.unary_operators.code}
              height={codeSnippets.unary_operators.height}
            />
          </li>
          <li>
            <h4>Binary Operators</h4>
            <ul type="disc">
              <li>
                Arithmatic Operators
                <span className="code"> +, -, /, *, % </span>
                <ul>
                  <li>
                    All arithmatic operators can be performed between number
                    data types except `+` operator. `+` operator can behave like
                    addition and concatenation operator depending on the type of
                    operands.
                  </li>
                  <li>
                    For `+` Operator, if atleast one operand is a string then it
                    will act like a concatenation operator by converting the
                    other operand also to string.
                    <span className="code">
                      "abc" + 23 =&gt; "abc" + String(23) =&gt; "abc" + "23"
                      =&gt; "abc23"{" "}
                    </span>
                  </li>
                  <li>
                    Other than `+` remaining all arithmatic operators will do
                    arithmatic operations irrespective of it's operands.
                  </li>
                  <li>
                    If any operand is not a numeric type , internal type casting
                    will be done to number type then the arithmatic operation
                    takes place.
                  </li>
                  <ReadEditor
                    value={codeSnippets.arithmatic_operators.code}
                    height={codeSnippets.arithmatic_operators.height}
                  />
                  <li>
                    The result of an arithmatic operator will always be a
                    number( for `+` it maybe string also).Arithmatic operators
                    can be operated between any two operands in javascript.
                  </li>
                </ul>
              </li>
              <li>
                Comparision Operators
                <span className="code">{`==, ===, >, >= , <, <= , !=, !==`}</span>
                <ul>
                  <li>Comparision Operators used for comparision of data.</li>
                </ul>
              </li>
              <li>
                Logical Operators <span className="code">{`&& , ||, !`}</span>
                <ul>
                  <li>
                    To understand Logical operators one has to understand the
                    concept of <span className="code">truthy</span> and
                    <span className="code">falsy</span> values.
                  </li>
                  <li>
                    The concept of <span className="code">truthy</span> and
                    <span className="code">falsy</span> values refers to how
                    values are interpreted in a Boolean context, such as in
                    conditional statements (if,else if, while, for) or as
                    operands of logical operators (&&, ||, !).
                  </li>
                  <li>
                    A value is considered "truthy" if it is evaluated as true
                    when used in a Boolean context vice versa.
                  </li>
                  <li>
                    All <span className="code">Non zero numbers</span>,
                    <span className="code">Non empty strings</span>,
                    <span className="code">
                      Reference type data (except null)
                    </span>
                    will be evaluated as <span className="code">truthy</span>
                    values.
                  </li>
                  <li>
                    <span className="code">Empty string ('')</span>,
                    <span className="code">undefined</span>,
                    <span className="code">null</span>,
                    <span className="code">0</span>, will be evaluated as
                    <span className="code">falsy</span> values.
                  </li>
                </ul>
              </li>
              <li>
                Bitwise Operators
                <span className="code">{`& (and), | (or) , ^(xor), ~(negation), <<(left shift), >>(right shift)`}</span>
              </li>
            </ul>
          </li>
          <li>
            <h4>
              Ternary Operator
              <span className="code">condition ? expression1: expression2</span>
            </h4>
          </li>
        </ol>
      </section>

      <section className="section">
        <h2 id={subTopics[2].id}>{subTopics[2].subTopicName}</h2>
        <span className="code">if, else if, else</span>
        <ul>
          <li>
            Conditional statements are used to execute a piece of code
            conditionally.
          </li>
          <ReadEditor
            value={codeSnippets.conditional_statements.code}
            height={codeSnippets.conditional_statements.height}
          />
        </ul>
      </section>

      <section className="section">
        <h2 id={subTopics[3].id}>{subTopics[3].subTopicName} </h2>
        <ul>
          <li>Loops can execute a piece of code any number of times.</li>
          <li>Javascript supports five native looping techniques.</li>
        </ul>
        <ol>
          <li>
            <span className="code">for</span> This will loop through a piece of
            code for `n` number of times.
          </li>
          <ReadEditor
            value={codeSnippets.for_loop.code}
            height={codeSnippets.for_loop.height}
          />
          <li>
            <span className="code">while</span> This will loop through a piece
            if code until the condition is true.
          </li>
          <ReadEditor
            value={codeSnippets.while_loop.code}
            height={codeSnippets.while_loop.height}
          />
          <li>
            <span className="code">do-while</span> This will loop through a
            piece of code atleast once until the condition is true.
          </li>
          <ReadEditor
            value={codeSnippets.do_while_loop.code}
            height={codeSnippets.do_while_loop.height}
          />
          <li>
            <span className="code">for-in</span> This will loop through keys of
            an object , array.
          </li>
          <ReadEditor
            value={codeSnippets.for_in_loop.code}
            height={codeSnippets.for_in_loop.height}
          />
          <li>
            <span className="code">for-of</span> This will loop through values
            of an iterable object (Array).
          </li>
          <ReadEditor
            value={codeSnippets.for_of_loop.code}
            height={codeSnippets.for_of_loop.height}
          />
        </ol>
      </section>
    </div>
  );
});

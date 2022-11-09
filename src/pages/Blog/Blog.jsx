
import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {


    return (
        <div className='my-12 min-h-[60vh]'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        Difference between "Javascript" and "NodeJS"
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            1. Javascript is a popular programming language and it runs in any web browser with a good web browser. On the other hand, Node.js is an interpreter and environment for the JavaScript with some specific useful libraries which JS programming can be used separately.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            2. JavaScript may run on any engine, including Safari's JavaScript Core, FireFox's Spider Monkey, and V8's V8 (Google Chrome) Only the V8 engine, which is mostly used by Google Chrome, supports Node.js. Furthermore, any JS program developed with the Node.js library will always execute in the V8 Engine.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            3. JavaScript is mainly used for the client-side activity for one particular web application. Some of these activities can be dynamic page display in some schedule time interval, addressing business validation or basic Ajax call kind of task. These are used most of the time for any web apps. On the other hand, Node.js is mainly used for running or accessing any operating system for the non-blocking operation.
                        </p>
                        

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Differences between SQL and NoSQL databases.
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            1. SQL is relational. Non-SQL is non relational.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            2. SQL databases support Structured Query Languages. NonSQL does not have any declarative query language.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            3. A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data. A software to retrieve, store and manage scalability of databases
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            4. SQL supports predefined schemas, making the storage of data restrictive to structured type only. Nosql supports dynamic schemas to store different forms of data.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            5. SQL supports databases like MySQL, SQL Server, Oracle, etc. Nosql databases are Hbase, MongoDB, Redis, etc.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is JWT, and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            1. JWT is distinct from other web tokens in that it includes a set of claims. Claims are a type of communication between two parties. The nature of these claims is determined by the use case at hand. A claim could specify who issued the token, how long it is valid, or what permissions the client has been given.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            2. A JWT is a three-part string separated by dots (.) that is serialized using base64. The JWT looks like this in the most common serialization format, compact serialization: aaaa.bbbbb.cccccc.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does NodeJS handle multiple requests at the same time?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Yes, but true. JavaScript is single threaded. The Node runtime is not. By default, Node only executes one JavaScript instance unless instructed to use more.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            1. Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            2. There’s an important caveat to this: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;
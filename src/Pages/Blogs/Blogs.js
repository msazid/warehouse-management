import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Blogs</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Difference between javascript and nodejs
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong  className='text-start'>Node js</strong>
                            <ul className='text-start'>
                                <li>It's a Javascript runtime environment that allows you to use the language on the server as well.</li>
                                <li>The insertion of HTML tags is not supported by Nodejs.</li>
                                <li>It is a server-side program. As a result, it facilitates server-side JS development.</li>
                            </ul>
                            <strong  className='text-start'>JavaScript</strong>
                            <ul  className='text-start'>
                                    <li>After all, it is a programming language. JS is mostly used to generate scripts for websites that make them more dynamic.</li>
                                    <li>Javascript may add HTML and alter the Document Object Model (DOM).</li>
                                    <li>It's mostly a client-side program. As a result, it's widely used in front-end design.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Differences between sql and nosql databases.
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>SQL</strong>
                            <ul  className='text-start'>
                                <li>SYSTEM FOR MANAGING RELATIONAL DATABASES (RDBMS)</li>
                                <li>These databases have a fixed, static, or both preset schema.</li>
                                <li>These databases were not created with hierarchical data in mind.</li>
                                <li>These databases can handle complex queries.</li>
                            </ul>
                            <strong>No Sql</strong>
                            <ul  className='text-start'>
                                <li>A non-relational or distributed database system.</li>
                                <li>They have a schema that is adaptable.</li>
                                <li>These databases aren't built to hold hierarchical information.</li>
                                <li>These databases aren't appropriate for complex searches.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What is the purpose of jwt and how does it work
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body text-start">
                        JWTs are used to authenticate users and securely exchange information. A private key, or secret, is used by the issuer to sign the JWT. Unauthenticated sources will have a tougher time predicting the signature key as a result. Other algorithms make use of a public and private key.

The identity provider (IdP) provides a JWT that validates the user's identity, and the resource server uses the secret salt / public key to decode and verify the token's authenticity.

Users can use their login and password or Google/Facebook to log in. The authentication server verifies the credentials and creates a jwt signed with a secret salt or a private key. The User's Client can access protected resources by supplying the JWT in the HTTP Authorization header.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
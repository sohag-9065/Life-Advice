import { Accordion } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Faq = () => {
    useTitle("Faq");
    return (
        <div className='my-12 min-h-[60vh]'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        Will I be able to participate in live Q&A sessions with Sohag?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            1. Yes. Quarterly live webinars will offer the chance to ask Sohag questions. Of course, he won’t be able to answer everyone’s questions, but he’ll answer as many as he can in the time allotted—and talk about tacos.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What payment methods do you support?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            We accept Visa, Mastercard, American Express, Discover & Diners, Google Pay, Apple Pay, and Paypal.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Is all content in English language?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            1. Yes. Videos for the courses have closed captions available in English as well.
                        </p>
                         

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    Can I get a refund if I don’t think The Life Advice is right for me?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes. The Life Advice membership comes with a 60-day money back guarantee. Just send an email to support@sohag.net within 60 days of purchase and we’ll cancel your membership and refund your money, no questions asked.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Faq;
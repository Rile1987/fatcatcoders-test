import React, { useState } from 'react';
import { z } from 'zod';
import {
    FormGenerator,
    FormField,
} from '@homework-task/components/FormGenerator';
import { Modal } from '@homework-task/components/Modal';
import './styles.css';
import PageGenerator from '@homework-task/components/PageGenerator';
import { Hero } from '@homework-task/components/Her';

const formSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(20, "Title can't be more than 20 characters"),
    body: z
        .string()
        .min(1, 'Body is required')
        .max(200, "Body can't be more than 200 characters"),
});

type FormInputs = z.infer<typeof formSchema>;

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFormSubmit = (data: FormInputs) => {
        setIsModalOpen(false);
    };

    const pageData = [
        {
            type: 'layoutSection',
            props: {
                backgroundColor: 'bg-white', // Example background color
            },
            components: [
                {
                    type: 'componentHero',
                    props: {
                        title: 'Welcome to My App',
                        image: './public/media/hero.png',
                    },
                },
                {
                    type: 'componentUserList',
                    props: {},
                },
            ],
        },
    ];

    return (
        <>
            <PageGenerator data={pageData} />
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white font-bold py-2 px-4 rounded mt-5"
            >
                Open Form
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="bg-white p-6 rounded-lg shadow">
                    <FormGenerator<FormInputs>
                        validationSchema={formSchema}
                        onSubmitSuccess={handleFormSubmit}
                        apiConfig={{
                            url: 'https://jsonplaceholder.typicode.com/posts',
                            method: 'POST',
                        }}
                        renderForm={() => (
                            <>
                                <FormField<FormInputs>
                                    name="title"
                                    label="Title"
                                    fieldType="input"
                                />
                                <FormField<FormInputs>
                                    name="body"
                                    label="Body"
                                    fieldType="textarea"
                                />
                                <div className="flex mt-4">
                                    <button
                                        type="submit"
                                        className="bg-black text-white font-bold py-2 px-4 rounded"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="bg-black text-white font-bold py-2 px-4 rounded ml-4"
                                    >
                                        Close
                                    </button>
                                </div>
                            </>
                        )}
                    />
                </div>
            </Modal>
        </>
    );
};

export default App;

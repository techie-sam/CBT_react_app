import { Button, CssVarsProvider } from '@mui/joy';
import React from 'react';
import { useSelector } from 'react-redux';



const Instructions = ({ setActiveStep }) => {
    const { questionControllerReducer: { questions } } = useSelector(state => state)
    return (
        <>
            <div className='col-9 col-lg-8 m-auto'>
                <h4 className='m-auto text-center mt-5 fw-bold'>Instructions</h4>
                <div className='mt-3 text-center'>You are provided with {questions.length} General questions and you are to <strong>answer all</strong> </div><hr />
                <div className='col-12 col-lg-6 m-auto text-center'>You have <strong>20 minutes</strong> to answer all questions. If at any point you're unable to finish on time, you will be automatically submitted.</div>
                <CssVarsProvider className='text-center'>
                    <div className='m-auto mt-3 text-center'>
                        <Button className='m-auto px-4' onClick={() => setActiveStep(2)} >Next</Button>
                    </div>
                </CssVarsProvider>
                <div className="attribution">
                    <p>Coded by <a href="https://github.com/techie-sam" target="_blank">Techie Sam</a></p>
                </div>
            </div>
        </>

    )
}

export default Instructions
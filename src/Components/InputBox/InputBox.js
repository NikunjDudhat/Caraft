import React from 'react';
import { FormFeedbackBox, InputBoxStyle } from './InputBox.style';

function InputBox({children, errorMessage = '', error=false, ...rest}) {
    return (
        <>
            <InputBoxStyle {...rest}>
                {children}
            </InputBoxStyle>

            <FormFeedbackBox error={error}>
                {errorMessage}
            </FormFeedbackBox>
        </>
    );
}

export default InputBox;
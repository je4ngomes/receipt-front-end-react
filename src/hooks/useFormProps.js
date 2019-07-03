import { useState } from 'react';

const useFormProps = ({ 
    fields = {},
    fieldErrors = {}, 
    customChangeHandler,
    submit, 
    validation: { 
        schema,
        isValid, 
        validate
    } 
}) => {
    const [state, setState] = useState({ fields, fieldErrors });

    const changeHandler = ({ target }) => {
        const { name, value, checked } = target;
        const isNotCheckBox = target.type !== 'checkbox';

        setState({
            ...state, 
            fields: { 
                ...state.fields, 
                [name]: isNotCheckBox ? value : checked 
            } 
        }); 
    };

    const validateOnBlur = () =>
        setState({ ...state, fieldErrors: validate(schema) });

    const submitHandler = (event) =>
        isValid(state.fieldErrors) && submit(event, state.fields);  

    return {
        fields: state.fields, 
        fieldErrors: state.fieldErrors,
        submitHandler,
        validateOnBlur,
        changeHandler: customChangeHandler || changeHandler
    };
};

export default useFormProps;
import React, { useEffect } from 'react';
import M from 'materialize-css';

import InlineInput from './InlineInput';


const InlineDatePicker = (props) => {
    const options = {
        format: 'dd/mm/yyyy',
        container: 'body',
        i18n: {
            months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
                    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthsShort: ["Jan", "Feb", "Mar", "Abr", "Mai", 
                        "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            weekdays: ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
            weekdaysShort: ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            weekdaysAbbrev: ["D","S", "T", "Q", "Q", "S", "S"]
        }
    }

    useEffect(() => {
        const instance = M.Datepicker.init(
            document.getElementById('datepicker_323'), 
            options
        );

        return () => instance.destroy();
    }, []);

    return (
        <InlineInput {...props} id='datepicker_323'/>
    );
};

export default InlineDatePicker;

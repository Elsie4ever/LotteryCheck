import './ExploreContainer.css';
import * as React from 'react';
import { DefaultButton, PrimaryButton, Stack, TextField } from '@fluentui/react';
import { generateTicketEntry } from '../utils';
import { useDebouncedTextChange } from '../shared/hooks/useDebouncedChange';
import { setLotteryTicketValueAction } from '../action';
import { useLotteryCheckContext } from '../hooks/useLotteryCheckContext';

interface LotteryInputProps {
    lotteryBrand: string;
    inputNumber: number;
}
  
const LotteryInput: React.FC<LotteryInputProps> = ({lotteryBrand, inputNumber}) => {
    const [ticketValue, setTicketValue] = React.useState(generateTicketEntry(lotteryBrand, inputNumber));
    const [index, setIndex] = React.useState(0);
    const [{lotteryTicketEntries}, {validate, setLotteryEntry, checkLotteryEntryPrices}] = useLotteryCheckContext();

    const [ onTicketNumberChange ] = useDebouncedTextChange(value => {
        validate(value);
        ticketValue.entryNumber[index] = parseInt(value?value:'0', 10);
        setTicketValue(ticketValue);
    });

    const onTextChange = (index: number) => (event: any, newValue?: string) =>{
        setIndex(index);
        onTicketNumberChange(event, newValue?.toString());
    }

    const inputBoxes = React.useMemo(() => {
        return (
        <Stack horizontal tokens={{childrenGap: 10}} horizontalAlign="center" style={{padding: '10px'}}>
            {ticketValue.entryNumber.map((value, i)=>{
                return (
                    <TextField
                        onChange={onTextChange(i)}
                        placeholder={value.toLocaleString()}
                        style={{width: '50px'}}
                    />
                );
            })}
        </Stack>
        );
    }, []);

    const onAdd = () => {
        setLotteryEntry(ticketValue);
        setTicketValue(generateTicketEntry(lotteryBrand, inputNumber));
    }

    const onCheck = () => {
        checkLotteryEntryPrices(lotteryTicketEntries);
    }

    return (
        <div className="container">
            <strong>{lotteryBrand}</strong>
            {inputBoxes}
            <PrimaryButton text="Add" onClick={onAdd} />

            {lotteryTicketEntries.length > 0 &&
                <DefaultButton text="Check" onClick={onCheck} />
            }
        </div>
    );
};

export default LotteryInput;
  
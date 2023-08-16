import { calculatePercentageChange } from '@/util/helper'
import TriangleIcon from '@/components/Icon/TriangleIcon'
import Card from '@/components/Card/Card'
import Text from '@/components/Text/Text';
import Icon, { CustomIcons } from '@/components/Icon/Icon'

type Statistic = {
    id: number,
    name: string,
    title: string,
    currentValue: number,
    previousValue?: number
}

type Props = {
    data: Statistic;
}

const CardStatistic = (props: Props) => {

    const { id, name, title, currentValue, previousValue } = props.data;

    const percValue = previousValue && calculatePercentageChange(currentValue, previousValue)

    return (
        <Card key={id} className="py-7 min-w-[280px] flex flex-col items-center relative w-[25%]">
            <Icon
                name={name as CustomIcons}
                iconContainerStyle="w-7 h-7 p-[7px] rounded-full flex items-center justify-center text-white"
                background
            />

            <h2 className="text-black text-[65px]">{currentValue}</h2>
            <Text tag="h6" type="body" className="mt-[-15px]">{title}</Text>
            <div className="flex items-center mt-5">
                {percValue && (percValue > 0 ? (
                    <>
                        <TriangleIcon direction="up" color="border-b-success" />
                        <p className="ml-1.5 text-success">{`${percValue}%`}</p>
                    </>
                ) : (
                    <>
                        <TriangleIcon direction="down" color="border-t-error" />
                        <p className="ml-1.5 text-error">{`${Math.abs(percValue)}%`}</p>
                    </>
                ))}
            </div>

            {name === "users" && <Icon name="add" iconContainerStyle="w-5 h-5 absolute bottom-3 right-3" background />}
        </Card>
    )
}

export default CardStatistic
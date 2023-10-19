import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import './day-picker.css'

const RangeCalendar = ({ range, setRange, currentDate }) => {
	return (
		<DayPicker
			id='test'
			mode='range'
			defaultMonth={currentDate}
			selected={range}
			onSelect={setRange}
		/>
	)
}

export default RangeCalendar

import { useState } from 'react'
import styles from './Header.module.scss'
import { AiOutlineCalendar, AiOutlineArrowRight } from 'react-icons/ai'
import RangeCalendar from '../range-calendar/RangeCalendar'

const Header = ({
	name,
	link = ``,
	calendar = '',
	range,
	setRange,
	currentDate
}) => {
	const [isShowCalendar, setIsShowCalendar] = useState(false)

	return (
		<div className={calendar ? styles.headerWithCalendar : styles.header}>
			<span className={styles.name}>{name}</span>
			{calendar ? (
				<div className={styles.dateRange}>
					<span>
						Select Date Range
						<AiOutlineCalendar
							onClick={() => setIsShowCalendar(prevState => !prevState)}
						/>
					</span>
					{isShowCalendar && (
						<div className={styles.calendar}>
							<RangeCalendar
								range={range}
								setRange={setRange}
								currentDate={currentDate}
							/>
						</div>
					)}
					<AiOutlineArrowRight onClick={() => setIsShowCalendar(false)} />
				</div>
			) : (
				<span className={styles.link}>{link.name}</span>
			)}
		</div>
	)
}

export default Header

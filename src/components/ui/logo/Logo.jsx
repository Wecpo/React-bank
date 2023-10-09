import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<svg
			className={styles.logo}
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='44.000000pt'
			height='44.000000pt'
			viewBox='0 0 155.000000 155.000000'
			preserveAspectRatio='xMidYMid meet'
		>
			<g
				transform='translate(0.000000,155.000000) scale(0.100000,-0.100000)'
				fill='#6e468f'
				stroke='none'
			>
				<path
					d='M630 1540 c-75 -16 -182 -54 -187 -66 -2 -7 17 -90 43 -185 25 -96
53 -202 62 -235 l15 -62 86 24 c168 46 241 28 294 -75 66 -132 17 -237 -131
-280 -155 -45 -247 -70 -250 -66 -2 2 -17 56 -33 122 -62 246 -180 698 -184
702 -7 6 -76 -49 -129 -103 -209 -216 -272 -542 -159 -824 67 -166 208 -318
366 -395 122 -60 215 -81 347 -81 166 1 297 41 432 131 126 84 235 224 286
365 152 421 -73 873 -503 1008 -79 25 -278 36 -355 20z m546 -806 c9 -35 -11
-96 -43 -134 -39 -47 -92 -69 -281 -121 l-174 -46 -9 24 c-20 54 -16 59 94 88
205 55 237 66 257 92 11 14 20 40 20 58 0 32 2 33 58 48 31 8 60 15 64 16 4 1
11 -11 14 -25z'
				/>
				<path
					d='M670 928 c-41 -11 -76 -21 -78 -23 -4 -4 44 -185 51 -191 2 -3 43 5
91 17 121 30 150 73 112 164 -25 60 -55 65 -176 33z'
				/>
			</g>
		</svg>
	)
}

export default Logo

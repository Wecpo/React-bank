import { AvatarGenerator } from 'random-avatar-generator'

const generator = new AvatarGenerator()
const avatar1 = generator.generateRandomAvatar(`1`)
const avatar2 = generator.generateRandomAvatar(`2`)
const avatar3 = generator.generateRandomAvatar(`3`)
const avatar4 = generator.generateRandomAvatar(`4`)
const avatar5 = generator.generateRandomAvatar(`5`)
const avatar6 = generator.generateRandomAvatar(`6`)
const avatar7 = generator.generateRandomAvatar(`7`)
const avatar8 = generator.generateRandomAvatar(`8`)
const avatar9 = generator.generateRandomAvatar(`9`)
const avatar10 = generator.generateRandomAvatar(`10`)
const avatar11 = generator.generateRandomAvatar(`11`)
const avatar12 = generator.generateRandomAvatar(`12`)

export const users = [
	{
		name: 'Maksim Senin',
		avatarPath: avatar1
	},
	{
		name: 'Darya Senina',
		avatarPath: avatar2
	},
	{
		name: 'Alina Sooela',
		avatarPath: avatar3
	},
	{
		name: 'Justin Bieber',
		avatarPath: avatar4
	},
	{
		name: 'Edward John',
		avatarPath: avatar5
	},
	{
		name: 'Alexey Smith',
		avatarPath: avatar6
	},
	{
		name: 'Dmitry Gromov',
		avatarPath: avatar7
	},
	{
		name: 'Evgeniy Sedov',
		avatarPath: avatar8
	},
	{
		name: 'Alex Jbakov',
		avatarPath: avatar9
	},
	{
		name: 'Kirill Krikov',
		avatarPath: avatar10
	},
	{
		name: 'Sergey Puch',
		avatarPath: avatar11
	},
	{
		name: 'Sergey Raikin',
		avatarPath: avatar12
	}
]

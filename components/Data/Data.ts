export const PremiumItemsData = [
	{
		image: 'https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f',
		id: 'premium1',
		title: 'Download music.',
		text: 'Listen anywhere.',
	},
	{
		image: 'https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137',
		id: 'premium2',
		title: 'Ad-free music listening.',
		text: 'Enjoy nonstop music.',
	},
	{
		image: 'https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67',
		id: 'premium3',
		title: 'Play any song.',
		text: 'Even on mobile.',
	},
	{
		image: 'https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012',
		id: 'premium4',
		title: 'Unlimited skips.',
		text: 'Just hit next.',
	},
];

//type cast terms

export const PlanItemsData = [
	{
		type: ['One-time plan'],
		title: 'Mini',
		description: ['R11.99/week', '1 account'],
		terms: [{ hyperLink: 'Terms and conditions apply.', text: '' }] as {
			hyperLink: string;
			text: string;
		}[],
		options: [
			'Ad-free music listening on mobile',
			'Group Session',
			'Download 30 songs on 1 mobile device',
		],
		id: '_' + Math.random().toString(36),
	},
	{
		type: ['One-time plans available', '1 month free with subscription'],
		title: 'Individual',
		description: ['R59.99/month after offer period', '1 account'],
		terms: [
			{
				hyperLink: 'Terms and conditions apply.',
				text: '1 month free not available for users who have already tried Premium.',
			},
		] as {
			hyperLink: string;
			text: string;
		}[],

		options: [
			'Ad-free music listening on mobile',
			'Play anywhere - even offline',
			'On-demand playback',
			'Prepay or subscribe',
		],
		id: '_' + Math.random().toString(36),
	},
	{
		type: ['One-time plans available', '1 month free with subscription'],
		title: 'Duo',
		description: ['R79.99/month after offer period', '2 accounts'],
		terms: [
			{
				hyperLink: 'Terms and conditions apply.',
				text: '1 month free not available for users who have already tried Premium.',
			},
		] as {
			hyperLink: string;
			text: string;
		}[],
		options: [
			'2 Premium accounts for a couple under one roof',
			'Ad-free music listening, play offline, on-demand playback',
			'Prepay or subscribe',
		],
		id: '_' + Math.random().toString(36),
	},
	{
		type: ['One-time plans available', '1 month free with subscription'],
		title: 'Family',
		description: ['R99.99/month after offer period', 'Up to 6 accounts'],
		terms: [
			{
				hyperLink: 'Terms and conditions apply.',
				text: '1 month free not available for users who have already tried Premium.',
			},
		] as {
			hyperLink: string;
			text: string;
		}[],
		options: [
			'6 Premium accounts for family members living under one roof',
			'Block explicit music',
			'Ad-free music listening, play offline, on-demand playback',
			'Prepay or subscribe',
		],
		id: '_' + Math.random().toString(36),
	},
];

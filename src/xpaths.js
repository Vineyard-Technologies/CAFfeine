export const Xpaths = {
	
	Game: {
		
	},
	AccountDropdown: {
		enterAccessCode: "//span[text()='Enter access code']/..",
		logIn: "//ui-menuitem//span[text()='Log in']/..",
		purchase: "//span[text()='Purchase...']/..",
		register: "//span[text()='Register...']/..",
		viewDetails: "//span[text()='View details']/..",
	},

	BuyNow: {
		Page1: {
			fullRunDown: "//a[text()='full run down']",
			proceedToPaymentBottom: "//*[@class='c']//a[@class='openDemo']",
			proceedToPaymentMiddle: "//div[@class='proceedOverlay']//a[@class='openDemo']",
			visitOurPricingPages: "//a[text()='visit our pricing pages']",
		},

		Page2: {
			continueButton: "//*[@id='BtnContinue']",
			email: "//*[@id='Email']",
			generalTermsAndConditions: "//a[text()='general terms & conditions']",
			orYouCanLogin: "//a[text()='or you can login']",
			privacyPolicy: "//a[text()='privacy policy']",
			storeTermsAndConditions: "//a[text()='store terms & conditions']",
		},

		Page3: {
			CancellationTermsDialog: {
				contactingUs: "//a[text()='contacting us']",
				ok: "//*[@id='CloseSubTermsOverlayLink']",
			},

			cancel: "//*[@class='cancel']",
			cardNumber: "//*[@name='cardnumber']",
			countryDropdown: "//*[@id='Country']",
			creditOrDebit: "//*[@id='pm1']",
			editEmail: "//a[@class='editEmail']",
			expDate: "//*[@name='exp-date']",
			firstName: "//*[@id='FirstName']",
			go: "//*[@class='go']",
			lastName: "//*[@id='LastName']",
			payPal: "//*[@id='pm2']",
			phoneNumber: "//*[@id='Phone']",
			placeOrder: "//*[@id='BtnPlaceOrder']",
			postCode: "//*[@id='Postcode']",
			subscriptionAndCancellationTerms: "//*[@id='SubTermsLink']",

			country(country) {
				return "//*[@id='Country']/*[text()='" + country + "']";
			},
		},

		buyNow: "//ui-tab/span[text()='Buy now']",
	},

	ExampleBrowser: {
		Behaviors: {
			Attributes: {
				jumpThru: "//*[@class='section -behavior']/*[@data-tag='behavior-jumpthru']",
				persist: "//*[@class='section -behavior']/*[@data-tag='behavior-Persist']",
				shadowCaster: "//*[@class='section -behavior']/*[@data-tag='behavior-shadowcaster']",
				solid: "//*[@class='section -behavior']/*[@data-tag='behavior-solid']",
			},

			General: {
				anchor: "//*[@class='section -behavior']/*[@data-tag='behavior-Anchor']",
				boundToLayout: "//*[@class='section -behavior']/*[@data-tag='behavior-bound']",
				destroyOutsideLayout: "//*[@class='section -behavior']/*[@data-tag='behavior-destroy']",
				dragNDrop: "//*[@class='section -behavior']/*[@data-tag='behavior-DragnDrop']",
				fade: "//*[@class='section -behavior']/*[@data-tag='behavior-Fade']",
				flash: "//*[@class='section -behavior']/*[@data-tag='behavior-Flash']",
				lineOfSight: "//*[@class='section -behavior']/*[@data-tag='behavior-LOS']",
				pin: "//*[@class='section -behavior']/*[@data-tag='behavior-Pin']",
				scrollTo: "//*[@class='section -behavior']/*[@data-tag='behavior-scrollto']",
				solid: "//*[@class='section -behavior']/*[@data-tag='behavior-solid']",
				timer: "//*[@class='section -behavior']/*[@data-tag='behavior-Timer']",
				tween: "//*[@class='section -behavior']/*[@data-tag='behavior-Tween']",
				wrap: "//*[@class='section -behavior']/*[@data-tag='behavior-Wrap']",
			},

			Movements: {
				bullet: "//*[@class='section -behavior']/*[@data-tag='behavior-Bullet']",
				car: "//*[@class='section -behavior']/*[@data-tag='behavior-Car']",
				custom: "//*[@class='section -behavior']/*[@data-tag='behavior-custom']",
				eightDirection: "//*[@class='section -behavior']/*[@data-tag='behavior-EightDir']",
				moveTo: "//*[@class='section -behavior']/*[@data-tag='behavior-MoveTo']",
				orbit: "//*[@class='section -behavior']/*[@data-tag='behavior-Orbit']",
				pathFinding: "//*[@class='section -behavior']/*[@data-tag='behavior-Pathfinding']",
				physics: "//*[@class='section -behavior']/*[@data-tag='behavior-Physics']",
				platform: "//*[@class='section -behavior']/*[@data-tag='behavior-Platform']",
				rotate: "//*[@class='section -behavior']/*[@data-tag='behavior-Rotate']",
				sine: "//*[@class='section -behavior']/*[@data-tag='behavior-Sin']",
				tileMovement: "//*[@class='section -behavior']/*[@data-tag='behavior-TileMovement']",
				turret: "//*[@class='section -behavior']/*[@data-tag='behavior-Turret']",
			},

			attributesExpander: "//*[@class='titleSection -behavior'][text()='Attributes']",
			generalExpander: "//*[@class='titleSection -behavior'][text()='General']",
			movementsExpander: "//*[@class='titleSection -behavior'][text()='Movements']",
		},

		Categories: {
			bareBonesTemplate: "//div[@class='section -category']/div[@data-tag='barebones-template']",
			demoGame: "//div[@class='section -category']/div[@data-tag='demo-game']",
			featureExample: "//div[@class='section -category']/div[@data-tag='feature-example']",
			gameplayMechanic: "//div[@class='section -category']/div[@data-tag='gameplay-mechanic']",
			gameTemplate: "//div[@class='section -category']/div[@data-tag='game-template']",
			guidedTour: "//div[@class='section -category']/div[@data-tag='guided-tour']",
			newFilter: "//div[@class='section -category']/div[@data-tag='new']",
			recommended: "//div[@class='section -category']/div[@data-tag='recommended']",
			scripting: "//div[@class='section -category']/div[@data-tag='scripting']",
			techDemo: "//div[@class='section -category']/div[@data-tag='techDemo']",
		},

		Effects: {
			Blend: {
				darken: "//*[@class='section -effect']/*[@data-tag='effect-darken']",
				dodge: "//*[@class='section -effect']/*[@data-tag='effect-dodge']",
				exclusion: "//*[@class='section -effect']/*[@data-tag='effect-exclusion']",
				lighten: "//*[@class='section -effect']/*[@data-tag='effect-lighten']",
				multiply: "//*[@class='section -effect']/*[@data-tag='effect-multiply']",
				overlay: "//*[@class='section -effect']/*[@data-tag='effect-overlay']",
				screen: "//*[@class='section -effect']/*[@data-tag='effect-screen']",
				softLight: "//*[@class='section -effect']/*[@data-tag='effect-softlight']",
			},

			Color: {
				adjustHsl: "//*[@class='section -effect']/*[@data-tag='effect-hsladjust']",
				alphaClamp: "//*[@class='section -effect']/*[@data-tag='effect-alphaclamp']",
				blurHorizontal: "//*[@class='section -effect']/*[@data-tag='effect-blurhorizontal']",
				blurVertical: "//*[@class='section -effect']/*[@data-tag='effect-blurvertical']",
				grayscale: "//*[@class='section -effect']/*[@data-tag='effect-grayscale']",
				inverse: "//*[@class='section -effect']/*[@data-tag='effect-inverse']",
				noise: "//*[@class='section -effect']/*[@data-tag='effect-noise']",
				pixellate: "//*[@class='section -effect']/*[@data-tag='effect-pixellate']",
				posterize: "//*[@class='section -effect']/*[@data-tag='effect-posterize']",
				radialBlur: "//*[@class='section -effect']/*[@data-tag='effect-radialblur']",
				replaceColor: "//*[@class='section -effect']/*[@data-tag='effect-replacecolor']",
				replaceSolidColor: "//*[@class='section -effect']/*[@data-tag='effect-replacesolidcolor']",
				setColor: "//*[@class='section -effect']/*[@data-tag='effect-setcolor']",
				sharpen: "//*[@class='section -effect']/*[@data-tag='effect-sharpen']",
				tint: "//*[@class='section -effect']/*[@data-tag='effect-tint']",
				vignette: "//*[@class='section -effect']/*[@data-tag='effect-vignette']",
			},

			Distortion: {
				bulge: "//*[@class='section -effect']/*[@data-tag='effect-bulge']",
				glass: "//*[@class='section -effect']/*[@data-tag='effect-glass']",
				pulse: "//*[@class='section -effect']/*[@data-tag='effect-pulse']",
				stretch: "//*[@class='section -effect']/*[@data-tag='effect-stretch']",
				swirl: "//*[@class='section -effect']/*[@data-tag='effect-swirl']",
				warpLayout: "//*[@class='section -effect']/*[@data-tag='effect-warplayout']",
				warpObject: "//*[@class='section -effect']/*[@data-tag='effect-warpobject']",
				warpRipple: "//*[@class='section -effect']/*[@data-tag='effect-warpripple']",
				water: "//*[@class='section -effect']/*[@data-tag='effect-water']",
			},

			Mask: {
				adjustHslMask: "//*[@class='section -effect']/*[@data-tag='effect-hsladjustmask']",
				warpObjectMask: "//*[@class='section -effect']/*[@data-tag='effect-warpobjectmask']",
			},

			MormalMapping: {
				bumpMapping: "//*[@class='section -effect']/*[@data-tag='effect-bumpmapping']",
			},

			ThreeD: {
				fogExponential: "//*[@class='section -effect']/*[@data-tag='effect-fogexponential']",
			},

			blendExpander: "//*[@class='titleSection -effect'][text()='Blend']",
			colorExpander: "//*[@class='titleSection -effect'][text()='Color']",
			distortionExpander: "//*[@class='titleSection -effect'][text()='Distortion']",
			maskExpander: "//*[@class='titleSection -effect'][text()='Mask']",
			normalMappingExpander: "//*[@class='titleSection -effect'][text()='Normal mapping']",
			threeDExpander: "//*[@class='titleSection -effect'][text()='3D']",
		},

		Genres: {
			action: "//div[@class='section -genre']/div[@data-tag='action']",
			adventure: "//div[@class='section -genre']/div[@data-tag='adventure']",
			animation: "//div[@class='section -genre']/div[@data-tag='animation']",
			arcade: "//div[@class='section -genre']/div[@data-tag='arcade']",
			fighting: "//div[@class='section -genre']/div[@data-tag='fighting']",
			multiplayer: "//div[@class='section -genre']/div[@data-tag='multiplayer']",
			platformer: "//div[@class='section -genre']/div[@data-tag='platformer']",
			puzzle: "//div[@class='section -genre']/div[@data-tag='puzzle']",
			racing: "//div[@class='section -genre']/div[@data-tag='racing']",
			rpg: "//div[@class='section -genre']/div[@data-tag='rpg']",
			shooter: "//div[@class='section -genre']/div[@data-tag='shooter']",
			strategy: "//div[@class='section -genre']/div[@data-tag='strategy']",
		},

		Levels: {
			advanced: "//div[@class='section -level']/div[@data-tag='advanced']",
			beginner: "//div[@class='section -level']/div[@data-tag='beginner']",
			intermediate: "//div[@class='section -level']/div[@data-tag='intermediate']",
		},

		Plugins: {
			DataAndStorage: {
				array: "//*[@class='section -plugin']/*[@data-tag='plugin-Arr']",
				binaryData: "//*[@class='section -plugin']/*[@data-tag='plugin-BinaryData']",
				dictionary: "//*[@class='section -plugin']/*[@data-tag='plugin-Dictionary']",
				json: "//*[@class='section -plugin']/*[@data-tag='plugin-Json']",
				localStorage: "//*[@class='section -plugin']/*[@data-tag='plugin-LocalStorage']",
				xml: "//*[@class='section -plugin']/*[@data-tag='plugin-XML']",
			},

			FormControls: {
				button: "//*[@class='section -plugin']/*[@data-tag='plugin-Button']",
				htmlElement: "//*[@class='section -plugin']/*[@data-tag='plugin-HTMLElement']",
				iFrame: "//*[@class='section -plugin']/*[@data-tag='plugin-iframe']",
				list: "//*[@class='section -plugin']/*[@data-tag='plugin-list']",
				sliderBar: "//*[@class='section -plugin']/*[@data-tag='plugin-sliderbar']",
				textInput: "//*[@class='section -plugin']/*[@data-tag='plugin-textBox']",
			},

			General: {
				ninePatch: "//*[@class='section -plugin']/*[@data-tag='plugin-NinePatch']",
				particles: "//*[@class='section -plugin']/*[@data-tag='plugin-Particles']",
				shadowLight: "//*[@class='section -plugin']/*[@data-tag='plugin-shadowlight']",
				sprite: "//*[@class='section -plugin']/*[@data-tag='plugin-Sprite']",
				spriteFont: "//*[@class='section -plugin']/*[@data-tag='plugin-Spritefont2']",
				text: "//*[@class='section -plugin']/*[@data-tag='plugin-Text']",
				tiledBackground: "//*[@class='section -plugin']/*[@data-tag='plugin-TiledBg']",
				tileMap: "//*[@class='section -plugin']/*[@data-tag='plugin-Tilemap']",
				timeLineController: "//*[@class='section -plugin']/*[@data-tag='plugin-Timeline']",
			},

			Input: {
				gamePad: "//*[@class='section -plugin']/*[@data-tag='plugin-gamepad']",
				keyBoard: "//*[@class='section -plugin']/*[@data-tag='plugin-Keyboard']",
				mouse: "//*[@class='section -plugin']/*[@data-tag='plugin-Mouse']",
				touch: "//*[@class='section -plugin']/*[@data-tag='plugin-Touch']",
			},

			Media: {
				audio: "//*[@class='section -plugin']/*[@data-tag='plugin-Audio']",
				geolocation: "//*[@class='section -plugin']/*[@data-tag='plugin-Geolocation']",
				speechRecognition: "//*[@class='section -plugin']/*[@data-tag='plugin-SpeechRecognition']",
				speechSynthesis: "//*[@class='section -plugin']/*[@data-tag='plugin-SpeechSynthesis']",
				userMedia: "//*[@class='section -plugin']/*[@data-tag='plugin-UserMedia']",
				videoRecorder: "//*[@class='section -plugin']/*[@data-tag='plugin-GameRecorder']",
			},

			Other: {
				advancedRandom: "//*[@class='section -plugin']/*[@data-tag='plugin-AdvancedRandom']",
				blueTooth: "//*[@class='section -plugin']/*[@data-tag='plugin-Bluetooth']",
				date: "//*[@class='section -plugin']/*[@data-tag='plugin-Date']",
				drawingCanvas: "//*[@class='section -plugin']/*[@data-tag='plugin-DrawingCanvas']",
				platformInfo: "//*[@class='section -plugin']/*[@data-tag='plugin-PlatformInfo']",
				share: "//*[@class='section -plugin']/*[@data-tag='plugin-Share']",
			},

			ThreeD: {
				threeDCamera: "//*[@class='section -plugin']/*[@data-tag='plugin-Camera3D']",
				threeDShape: "//*[@class='section -plugin']/*[@data-tag='plugin-Shape3D']",
			},

			Web: {
				ajax: "//*[@class='section -plugin']/*[@data-tag='plugin-AJAX']",
				browser: "//*[@class='section -plugin']/*[@data-tag='plugin-Browser']",
				multiplayer: "//*[@class='section -plugin']/*[@data-tag='plugin-Multiplayer']",
			},

			dataAndStorageExpander: "//*[@class='titleSection -plugin'][contains(text(),'Data & storage')]",
			formControls: "//*[@class='titleSection -plugin'][contains(text(),'Form Controls')]",
			generalExpander: "//*[@class='titleSection -plugin'][contains(text(),'General')]",
			inputExpander: "//*[@class='titleSection -plugin'][contains(text(),'Input')]",
			mediaExpander: "//*[@class='titleSection -plugin'][contains(text(),'Media')]",
			otherExpander: "//*[@class='titleSection -plugin'][contains(text(),'Other')]",
			threeDExpander: "//*[@class='titleSection -plugin'][contains(text(),'3D')]",
			webExpander: "//*[@class='titleSection -plugin'][contains(text(),'Web')]",
		},

		Tags: {
			meshDistortion: "//div[@class='section -tag']/div[@data-tag='mesh-distortion']",
			mobile: "//div[@class='section -tag']/div[@data-tag='mobile']",
			performance: "//div[@class='section -tag']/div[@data-tag='performance']",
			sceneGraph: "//div[@class='section -tag']/div[@data-tag='scene-graph']",
			threeD: "//div[@class='section -tag']/div[@data-tag='3d']",
			timeline: "//div[@class='section -tag']/div[@data-tag='timeline']",
		},

		behaviors: "//div[@class='listTags']/*[@class='titleSection -behavior']",
		categories: "//div[@class='listTags']/*[@class='titleSection -category']",
		clear: "//*[@id='selectedTags']/div[@class='buttonClear']",
		clearFilters: "//div[@class='resultsFooterClearTags']",
		effects: "//*[@id='listTags']/div[@class='titleSection -effect']",
		exampleBrowserTab: "//ui-tabbar//span[text()='Example browser']/..",
		genres: "//*[@id='listTags']/div[@class='titleSection -genre']",
		levels: "//*[@id='listTags']/div[@class='titleSection -level']",
		plugins: "//*[@id='listTags']/div[@class='titleSection -plugin']",
		searchBox: "//input[@class='searchInputField']",
		tags: "//*[@id='listTags']/div[@class='titleSection -tag']",

		removeFilter(tag) {
			return "//div[@id='selectedTags']/div[@data-tag='" + tag.toLowerCase() + "']";
		},
	},

	MenuDropdown: {
		AccountPopout: {
			enterAccessCode: "//span[text()='Enter access code']/..",
			logIn: "//span[text()='Log in']/..",
			purchase: "//span[text()='Purchase...']/..",
			register: "//span[text()='Register...']/..",
			viewDetails: "//span[text()='View details']/..",
		},

		GuidedToursPopout: {
			beginnersGuide: "//span[contains(text(),'Beginner')]/..",
			getStartedWithJavaScript: "//span[text()='Get started with JavaScript']/..",
			getStartedWithTimelineAnimations: "//span[text()='Get started with timeline animations']/..",
			platformGame: "//span[text()='Make a platform game']/..",
		},

		ProjectPopout: {
			OpenRecentPopout: {
				recentProject(name) {
					return "(//span[contains(text(), '" + name + "')]/..)[1]";
				},
			},

			saveAsPopout: {
				cloudSave: "//span[text()='Cloud save']/..",
				downloadACopy: "//span[text()='Download a copy']/..",
				saveAsProjectFolder: "//span[text()='Save as project folder...']/..",
				saveAsSingleFile: "//span[text()='Save as single file...']/..",
			},

			closeProject: "//span[text()='Close project']/..",
			cloudOpen: "//span[text()='Cloud open']/..",
			debug: "//span[text()='Debug']/..",
			export: "//span[text()='Export']/..",
			newProject: "//span[text()='New']/..",
			openLocalFile: "//span[text()='Open local file']/..",
			openLocalFolder: "//span[text()='Open local project folder']/..",
			openRecent: "//span[text()='Open recent']/..",
			preview: "//span[text()='Preview']/..",
			remotePreview: "//span[text()='Remote preview']/..",
			save: "//span[text()='Save']/..",
			saveAs: "//span[text()='Save as']/..",
		},

		ViewPopout: {
			addonManager: "//span[text()='Addon manager']/..",
			exampleBrowser: "//span[text()='Example browser']/..",
			exportManager: "//span[text()='Export manager']/..",
			startPage: "//span[text()='Start page'][@class='menu-item-text']/..",
			storageCleanup: "//span[text()='Storage cleanup']/..",
		},

		about: "//span[text()='About']/..",
		account: "//span[text()='Account']/..",
		assetStore: "//span[text()='Asset Store']/..",
		getAddons: "//span[text()='Get addons']/..",
		guidedTours: "//span[text()='Guided tours']/..",
		help: "//span[text()='Help']/..",
		installAsApp: "//span[text()='Install as app']/..",
		project: "//span[text()='Project'][@class='menu-item-text']/..",
		settings: "//span[text()='Settings']/..",
		view: "//span[text()='View']/..",
	},

	preview: "//div[@title='Preview']",
	redo: "//div[@title='Redo']",
	save: "//ui-toolbar-button[@title='Save project']",
	undo: "//div[@title='Undo']",
	otherPreviewOptions: "//div[@title='Other preview options']",
	viewRedoStack: "//div[@title='View redo stack']",
	viewUndoStack: "//div[@title='View undo stack']",

	redoStack(number) {
		return "(//span[@class='menu-item-text'])[" + number + "]";
	},

	undoStack(number) {
		return "(//span[@class='menu-item-text'])[" + number + "]";
	},

	OtherPreviewOptions: {
		debugLayout: "//span[@class='menu-item-text'][text()='Debug layout']",
		previewLayout: "//span[@class='menu-item-text'][text()='Preview layout']",
		previewProject: "//span[@class='menu-item-text'][text()='Preview project']",
		remotePreview: "//span[@class='menu-item-text'][text()='Remote preview']",
	},

	Properties: {
		propertyTextInput(property) {
			return "//ui-propname//label[text()='" + property
					+ "']/ancestor::ui-proprow//input[not(@type='color')] | //ui-propname//label[text()='" + property
					+ "']/ancestor::ui-proprow//select[not(@type='color')]";
		},

		propertyGroupCollapser(propertyGroupName) {
			return "//label[@class='propgroup-label' and text()='" + propertyGroupName
					+ "']/following-sibling::ui-icon";
		},
	},

	Project: {
		x: "//*[@id='projectBar']//ui-close-button",

		ContextMenu: {
			editAnimations: "//span[text()='Edit animations']/parent::ui-menuitem",
		},

		search: "//input[@class='search']",

		searchResult(query) {
			return "(//span[text()='" + query + "'])[1]";
		},

		// TODO: Make this locator work when there's multiple projects open
		project: "(//ui-pane[@id='projectBar']//span[@class='tree-item-name'])[1]",
	},

	Layers: {
		x: "//*[@id='layersBar']//ui-close-button",

		layer(name) {
			return "//span[@class='tree-item-name' and text()='" + name + "']";
		},

		layerLock(name) {
			return "//span[@class='tree-item-name' and text()='" + name + "']/preceding-sibling::ui-icon";
		},

		layerCheckbox(name) {
			return "//span[@class='tree-item-name' and text()='" + name + "']/preceding-sibling::input";
		},

		layerExpander(name) {
			return "//span[@class='tree-item-name' and text()='" + name + "']/../preceding-sibling::ui-icon";
		},
	},

	zOrder: {
		layer(name) {
			return "//*[@id='zOrderBar']//span[text()='" + name + "']";
		},

		layerExpander(name) {
			return "//*[@id='zOrderBar']//span[text()='" + name + "']/../preceding-sibling::ui-icon";
		},
	},

	projectTab(name) {
		return "//ui-tab[starts-with(@title, 'Layout: " + name + "')]";
	},

	StartPage: {
		ExploreColumn: {
			assetStore: "//a[@data-campaign-content='AssetStore']",
			constructNet: "//a[@data-campaign-content='ConstructNet']",
			whatsNew: "//a[@class='whatsnewlinkbox cardLink -turquoise']",
		},

		GetMoreEventsBanner: {
			logIn: "//a[text()='log in']",
			registerAnAccount: "//a[text()='Register an account']",
			x: "//div[@id='banner']//div[@class='buttonClose']",
		},

		LearnColumn: {
			beginnersGuide: "//a[@data-campaign-content='BeginnersGuide']",
			manual: "//a[@data-campaign-content='Manual']",
			tutorials: "//a[@data-campaign-content='Tutorials']",
		},

		OpenButtonDropdown: {
			cloud: "//div[@class='option fromCloud']",
			file: "//div[@class='option fromFile']",
			projectFolder: "//div[@class='option fromFolder']",
		},

		ParticipateColumn: {
			arcade: "//a[@data-campaign-content='Arcade']",
			blogs: "//a[@data-campaign-content='Blogs']",
			forum: "//a[@data-campaign-content='Forum']",
		},

		RecommendedExamples: {
			browseExamples: "//*[@id='buttonExamples']",
			example1: "//*[@id='groupExamples']/div[1]",
			example2: "//*[@id='groupExamples']/div[2]",
			example3: "//*[@id='groupExamples']/div[3]",
		},

		SocialMedia: {
			facebook: "//*[@id='linkFacebook']",
			reddit: "//*[@id='linkReddit']",
			twitter: "//*[@id='linkTwitter']",
			youTube: "//*[@id='linkYoutube']",
		},

		newButton: "//*[@id='buttonNew']",
		open: "//*[@id='buttonOpen']",
		startPageClose: "//ui-tabbar//span[text()='Start page']/following-sibling::ui-close-button",
		startPageTab: "//ui-tabbar//span[text()='Start page']/..",

		recentProject(row) {
			return "//*[@class='cardProject'][" + row + "]";
		},
	},

	UserAccount: {
		userAccountName: "//*[@id='userAccountName']",
		userLicenseType: "//*[@id='userLicenseType']",
	},

	menu: "//*[@id='mainMenuButton']",
	userAccount: "//*[@id='userAccountWrap']",
	welcome: "//*[@id='welcomeTourDialog']",
	logIn: "//*[@id='loginDialog']",
	application: "//body[@role='application']",
	dimmer: "//div[@class='c3-dimmer']",
	html: "//html[@desktop]",
	iframe: "//ui-dialog-contents//iframe",
	main: "//*[@id='main']",
	progressDialog: "//*[@id='progressDialog']",
	betaUpdateAvailable: "//span[text()='Beta update available']/ancestor::dialog[@id='confirmDialog']",

	Dialog: {
		BetaUpdateAvailable: {
			update: "//button[text()='Update']",
			notNow: "//button[text()='Not now']",
			x: "//dialog[@id='confirmDialog']//ui-close-button[@title='Close']",
		},

		ConstructUpdated: {
			x: "//dialog[@id='confirmDialog']//ui-close-button[@title='Close']",
			viewReleaseNotes: "//button[text()='View release notes']",
			notNow: "//button[text()='Not now']",
		},

		NewProject: {
			Orientations: {
				any: "//option[@value='any']",
				landscape: "//option[@value='landscape']",
				portrait: "//option[@value='portrait']",
			},

			Presets: {
				landscape1080p: "//option[@value='1080p-landscape']",
				landscape4k: "//option[@value='4k-landscape']",
				landscape720p: "//option[@value='720p-landscape']",
				portrait1080p: "//option[@value='1080p-portrait']",
				portrait4k: "//option[@value='1080p-portait']",
				portrait720p: "//option[@value='720p-portrait']",
				retroStyle: "//option[@value='retro-style']",
				sdLandscape169: "//option[@value='sd-landscape-16-9']",
				sdLandscape43: "//option[@value='sd-landscape-4-3']",
				sdPortrait169: "//option[@value='sd-portrait-16-9']",
				sdPortrait34: "//option[@value='sd-portrait-4-3']",
			},

			StartWith: {
				eventSheet: "//option[@value='event-sheet']",
				script: "//option[@value='script']",
			},

			cancel: "//*[@class='cancelButton']",
			choosePreset: "//*[@id='npPresetSelect']",
			create: "//button[text()='Create']",
			help: "//a[@class='helpLink']",
			name: "//*[@id='npProjectNameInput']",
			optimizeForPixelArt: "//*[@id='npPixelArtCheck']",
			orientations: "//*[@id='npOrientationSelect']",
			startWith: "//*[@id='npStartWithSelect']",
			viewportSizeHeight: "//*[@id='npViewportHeightInput']",
			viewportSizeWidth: "//*[@id='npViewportWidthInput']",
			x: "//dialog[@id='newProjectDialog']//ui-close-button[@title='Close']",
		},

		Welcome: {
			noThanksNotNow: "//a[text()='No thanks, not now']",
			takeAGuidedTour: "//button[@class='tourButton']",
			x: "//*[@id='welcomeTourDialog']/ui-dialog-caption/ui-close-button",
		},

		StorageCleanup: {
			cancel: "//*[@id='storageCleanupDialog']//*[@class='cancelButton']",
			clearStorage: "//*[@id='storageCleanupDialog']//*[@class='okButton bold']",
			deleteDownloadedNwjsVersions: "//input[@class='clearNwjsStorage']",
			deleteExampleProjects: "//input[@class='clearExampleProjectsStorage']",
			deleteExportedProjects: "//input[@class='clearExportManagerStorage']",
			deleteSavedVersionsOfConstruct: "//input[@class='clearC3Storage']",
			help: "//*[@id='storageCleanupDialog']//*[@class='helpLink']",
			x: "//*[@id='storageCleanupDialog']//ui-close-button",
		},

		ShortBreak: {
			ok: "//*[@id='okDialog']//*[@class='okButton']",
			x: "//*[@id='okDialog']//ui-close-button",
		},

		setUpBackups: {
			learnMore: "//a[text()='Learn more']",
			openSettings: "//button[@class='confirmButton bold']",
			saveAnyway: "//button[@class='cancelConfirmButton']",
			x: "//dialog[@id='confirmDialog']//ui-close-button",
		},

		Settings: {
			BackupLocations: {
				dropBox: "//*[@class='defaultSaveLocation']/*[@value='DROPBOX']",
				googleDrive: "//*[@class='defaultSaveLocation']/*[@value='GOOGLE DRIVE']",
				localFolder: "//*[@class='defaultSaveLocation']/*[@value='WEBFS FOLDER']",
				localStorage: "//*[@class='defaultSaveLocation']/*[@value='LOCAL STORAGE']",
				oneDrive: "//*[@class='defaultSaveLocation']/*[@value='ONE DRIVE']",
				sameLocation: "//*[@class='defaultSaveLocation']/*[@value='MATCH']",
			},

			GpuPreferences: {
				defaultPreference: "//*[@class='gpuPowerPreference']/*[@value='default']",
				highPerformance: "//*[@class='gpuPowerPreference']/*[@value='high-performance']",
				lowPower: "//*[@class='gpuPowerPreference']/*[@value='low-power']",
			},

			PreviewModes: {
				browserTab: "//*[@class='previewMode']/*[@value='browser-tab']",
				dialog: "//*[@class='previewMode']/*[@value='iframe-dialog']",
				popupWindow: "//*[@class='previewMode']/*[@value='popup-window']",
			},

			Releases: {
				beta: "//*[@class='updateChannel']/*[@value='beta']",
				stable: "//*[@class='updateChannel']/*[@value='stable']",
			},

			SaveLocations: {
				cloud: "//*[@class='defaultSaveLocation']/*[@value='cloud']",
				download: "//*[@class='defaultSaveLocation']/*[@value='download']",
				localBrowser: "//*[@class='defaultSaveLocation']/*[@value='local-browser']",
				saveAs: "//*[@class='defaultSaveLocation']/*[@value='save-as']",
			},

			Themes: {
				dark: "//*[@class='theme']/*[text()='Dark']",
				defaultTheme: "//*[@class='theme']/*[text()='Default (no theme)']",
				light: "//*[@class='theme']/*[text()='Light']",
			},

			UiModes: {
				auto: "//*[@class='uiMode']/*[@value='auto']",
				desktop: "//*[@class='uiMode']/*[@value='desktop']",
				mobile: "//*[@class='uiMode']/*[@value='mobile']",
			},

			backupInterval: "//*[@class='autosaveDuration']",
			backupLocation: "//*[@class='autosaveLocation']",
			cacheCloudMetadata: "//*[@class='cacheCloudMetadata']",
			choose: "//button[@class='localBackupFolderChoose']",
			close: "//*[@id='settingsDialog']//*[@class='okButton']",
			defaultAnimationSpeed: "//*[@class='defaultAnimationSpeed']",
			defaultProjectAuthor: "//*[@class='defaultProjectAuthor']",
			defaultProjectEmail: "//*[@class='defaultProjectEmail']",
			defaultProjectWebsite: "//*[@class='defaultProjectWebsite']",
			defaultSaveLocation: "//*[@class='defaultSaveLocation']",
			enableExperimentalFeatures: "//*[@class='experimentalFeatures']",
			enableNotifications: "//*[@class='enableNotifications']",
			enableUiAnimations: "//*[@class='enableUIAnims']",
			enableUiEffects: "//*[@class='enableUIEffects']",
			gpuPreference: "//*[@class='gpuPowerPreference']",
			help: "//*[@class='helpLink']",
			hideAddActionRows: "//*[@class='hideAddActionRows']",
			hideTheStartPageWhenOpeningAProject: "//*[@class='autoHideStartPage']",
			iconColor: "//*[@class='iconColor']",
			languageSetting: "//*[@class='languageSetting']",
			occasionallyShowMessageBannersFromTheConstructTeamOnTheStartPage: "//*[@class='showStartPageMessageBanners']",
			periodicallyBackUpActiveProject: "//*[@class='enableAutosave']",
			previewSelector: "//*[@class='previewMode']",
			releaseNotifications: "//*[@class='updateChannel']",
			resetBarsAndDialogs: "//*[@class='resetLayout']",
			showInProgressLanguages: "//*[@class='inProgressLanguages']",
			showTakeABreakReminderEvery2Hours: "//*[@class='showTakeBreakReminders']",
			showTheStartPageOnStartup: "//*[@class='showStartPage']",
			simplifiedMode: "//*[@class='useSimplifiedMode']",
			textEditorAutomaticIndentation: "//*[@class='textEditorAutoIndent']",
			textEditorFontSize: "//*[@class='textEditorFontSize']",
			theme: "//*[@class='theme']",
			translateExpressions: "//*[@class='translateExpressions']",
			uiMode: "//*[@class='uiMode']",
			useDefaultIconColor: "//*[@class='useDefaultIconColor']",
			useInAppClipboard: "//*[@class='useFakeClipboard']",
			x: "//*[@id='settingsDialog']//ui-close-button",
			zoomWithMouseWheelOnly: "//*[@class='zoomMouseWheelOnly']",

			language(languageCode) {
				return "//*[@class='languageSetting']/*[@value='" + languageCode + "']";
			},
		},

		CreateNewObjectType: {
			name: "//*[@id='crObjectTypeNameInput']",
			searchBar: "//dialog[@id='createNewObjectTypeDialog']//input[@type='search']",
		},

		AnimationsEditor: {
			AnimationProperties: {
				help: "//a[text()='Help' and contains(@href, 'animations-editor')]",
				loop: "//*[@id='propid2']",
				name: "//*[@id='propid0']",
				pingPong: "//*[@id='propid5']",
				repeatCount: "//*[@id='propid3']",
				repeatTo: "//*[@id='propid4']",
				speed: "//*[@id='propid1']",
			},

			Animations: {
				AnimationContextMenu: {
					ImportAnimationsContext: {
						fromFiles: "//span[text()='From Files']",
					},

					delete: "//span[text()='Delete']/parent::*",
					importAnimations: "//span[text()='Import Animation']",
				},

				ContextMenu: {
					importAnimationPopout: {
						fromFiles: "//span[text()='From Files']/parent::*",
					},

					addAnimation: "//span[text()='Add Animation']/parent::*",
					importAnimation: "//span[text()='Import Animation']/parent::*",
				},

				animations: "//ui-animation-editor-panel[@class='animationsEditorAnimations']//ui-treeitem//div",
				background: "//ui-animation-editor-panel-content/ui-tree",
				title: "//ui-animation-editor-panel[@class='animationsEditorAnimations']/ui-animation-editor-panel-title",

				animation(number) {
					return "(//ui-animation-editor-panel[@class='animationsEditorAnimations']//ui-treeitem//div)["
							+ number + "]";
				},

				animation(name) {
					return "//ui-animation-editor-panel[@class='animationsEditorAnimations']//ui-treeitem//span[text()='"
							+ name + "']";
				},
			},

			ColorPalette: {
				alphaHex: "(//span[text()='Alpha: ']/following-sibling::*)[3]",
				alphaHsl: "(//span[text()='Alpha: ']/following-sibling::*)[2]",
				alphaRgb: "(//span[text()='Alpha: ']/following-sibling::*)[1]",
				blue: "//span[text()='Blue: ']/following-sibling::*",
				green: "//span[text()='Green: ']/following-sibling::*",
				hex: "//a[text()='HEX']",
				hexInput: "//span[text()='Hex: ']/following-sibling::*",
				hsl: "//a[text()='HSL']",
				hue: "//span[text()='Hue: ']/following-sibling::*",
				lum: "//span[text()='Lum: ']/following-sibling::*",
				primary: "//ui-palette-color-primary",
				red: "//span[text()='Red: ']/following-sibling::*",
				rgb: "//a[text()='RGB']",
				sat: "//span[text()='Sat: ']/following-sibling::*",
				secondary: "//ui-palette-color-secondary",

				swatch(number) {
					return "(//ui-palette-color-picks-swatch)[" + number + "]";
				},
			},

			ConfigureGrid: {
				gridColor: "//*[@id='gridColorInput']",
				gridHeight: "//*[@id='gridHeightInput']",
				gridWidth: "//*[@id='gridWidthInput']",
				okButton: "//button[@class='okButton']",
				snap: "//*[@id='gridSnapSelect']",
				x: "//*[@id='configureAnimationsEditorGridDialog']//ui-close-button",
			},

			FrameProperties: {
				duration: "//*[@id='propid1']",
				help: "//a[text()='Help' and contains(@href, 'animations-editor')]",
				index: "//*[@id='propid0']",
			},

			Frames: {
				frame(number) {
					return "(//ui-iconviewitem)[" + number + "]";
				},
			},

			ImageFormat: {
				applyTheseSettingsTo: "//div[@class='applyToAll']/select[@class='animations-editor']",
				format: "//div[@class='format']/select",
				ok: "//button[@class='okButton']",
				quality: "//div[@class='quality']/input",
				x: "//*[@id='imageFormatDialog']//ui-close-button",
			},

			ImagePoints: {
				ImagePointsContextMenu: {
					applyToAllAnimations: "//span[text()='Apply to all animations']",
				},

				origin: "//div[text()='Origin']",
			},

			Preview: {
				restart: "//button[@class='restartButton']",
				x: "//*[@id='previewAnimationDialog']//ui-close-button",
			},

			ResizeImageCanvas: {
				applyToAllAnimations: "//*[@id='resizeApplyToAllAnimationsCheckbox']",
				applyToWholeAnimation: "//*[@id='resizeApplyToWholeAnimationCheckbox']",
				heightPixels: "//*[@id='resizeHeightInput']",
				image: "//div[@class='image']/select",
				keepAspectRatio: "//*[@id='resizeAspectRatioCheckbox']",
				ok: "//button[@class='okButton']",
				smooth: "//*[@id='smoothCheckbox']",
				widthPixels: "//*[@id='resizeWidthInput']",
				x: "//*[@id='resizeImageDialog']//ui-close-button",
			},

			CropDropdown: {
				applyToAllAnimations: "//span[text()='Apply to all animations']",
			},

			FlipDropdown: {
				applyToAnimation: "//span[text()='Apply to animation']",
				applyToFrame: "//span[text()='Apply to frame']",
			},

			LoadImagesFromFileDropdown: {
				loadAnimations: "//span[text()='Load animations']",
				loadFrames: "//span[text()='Load frames']",
			},

			MirrorDropdown: {
				applyToAnimation: "//span[text()='Apply to animation']",
				applyToFrame: "//span[text()='Apply to frame']",
			},

			RedoDropdown: {
				menuItem(action) {
					return "//span[text()='" + action + "']/..";
				},
			},

			RotateAntiClockwiseDropdown: {
				applyToAnimation: "//span[text()='Apply to animation']",
				applyToFrame: "//span[text()='Apply to frame']",
			},

			RotateClockwiseDropdown: {
				applyToAnimation: "//span[text()='Apply to animation']",
				applyToFrame: "//span[text()='Apply to frame']",
			},

			SaveTheImageOrAnimationToAFileDropdown: {
				saveAllAnimationsPopout: {
					imagesOnly: "//span[text()='Images only']/..",
					imagesWithData: "//span[text()='Images with data']/..",
				},

				SaveCurrentAnimationPopout: {
					imagesOnly: "//span[text()='Images only']/..",
					imagesWithData: "//span[text()='Images with data']/..",
				},

				saveAllAnimations: "//span[text()='Save all animations']/..",
				saveCurrentAnimation: "//span[text()='Save current animation']/..",
				saveCurrentFrame: "//span[text()='Save current frame']/..",
			},

			ToggleGridDropdown: {
				configureGrid: "//span[text()='Configure Grid']/..",
				toggleGrid: "//span[text()='Toggle Grid']/..",
			},

			ToggleOnionSkinDropdown: {
				showLastAndNextFrame: "//span[text()='Show last and next frame']/..",
				showLastFrame: "//span[text()='Show last frame']/..",
				showTwoLastFramesAndNextTwoFrames: "//span[text()='Show two last frames and next two frames']/..",
			},

			UndoDropdown: {
				menuItem(action) {
					return "//span[text()='" + action + "']/..";
				},
			},

			border: "//span[text()='Border']/preceding-sibling::*/*",
			borderThicknessInput: "//ui-toolbar-slider/span[text()='Border Thickness']/following-sibling::input[@type='number']",
			borderThicknessSlider: "//ui-toolbar-slider/span[text()='Border Thickness']/following-sibling::input[@type='range']",
			brush: "//ui-toolbar-button[@title='Brush (B)']",
			center: "//span[text()='Center']/preceding-sibling::*/*",
			clearImage: "//ui-toolbar-button[@title='Clear image (C)']",
			copy: "//ui-toolbar-button[@title='Copy (Ctrl + C)']",
			cropDropdownArrow: "//div[contains(@title, 'Crop transparent edges')]/following-sibling::div",
			cut: "//ui-toolbar-button[@title='Cut (Ctrl + X)']",
			editTheCollisionPolygon: "//ui-toolbar-button[contains(@title, 'Edit the collision polygon')]",
			editTheImagePoints: "//ui-toolbar-button[contains(@title, 'Edit the image points')]",
			ellipse: "//ui-toolbar-button[@title='Ellipse (T)']",
			eraser: "//ui-toolbar-button[@title='Eraser (E)']",
			eyeDropper: "//ui-toolbar-button[@title='Eye dropper (I)']",
			fill: "//ui-toolbar-button[@title='Fill (F)']",
			fillCheckbox: "//span[text()='Fill']/preceding-sibling::*/*",
			flip: "//div[contains(@title, 'Flip (Ctrl + F)')]",
			flipDropdownArrow: "//div[contains(@title, 'Flip (Ctrl + F)')]/following-sibling::div",
			floodFill: "//span[text()='Flood Fill']/preceding-sibling::*/*",
			hardnessInput: "//ui-toolbar-slider/span[text()='Hardness']/following-sibling::input[@type='number']",
			hardnessSlider: "//ui-toolbar-slider/span[text()='Hardness']/following-sibling::input[@type='range']",
			line: "//ui-toolbar-button[@title='Line (L)']",
			loadImagesFromFile: "//div[@title='Load images from files (Ctrl + O)']",
			loadImagesFromFileDropdownArrow: "//div[@title='Load images from files (Ctrl + O)']/following-sibling::div",
			mirror: "//div[contains(@title, 'Mirror (Ctrl + M)')]",
			mirrorDropdownArrow: "//div[contains(@title, 'Mirror (Ctrl + M)')]/following-sibling::div",
			opacityInput: "//ui-toolbar-slider/span[text()='Opacity']/following-sibling::input[@type='number']",
			opacitySlider: "//ui-toolbar-slider/span[text()='Opacity']/following-sibling::input[@type='range']",
			paste: "//ui-toolbar-button[@title='Paste (Ctrl + V)']",
			pencil: "//ui-toolbar-button[@title='Pencil (N)']",
			preview: "//ui-toolbar-button[@title='Preview (Ctrl + P)']",
			rectangle: "//ui-toolbar-button[@title='Rectangle (R)']",
			rectangleSelect: "//ui-toolbar-button[@title='Rectangle select (S)']",
			redo: "//div[@title='Redo (Ctrl + Y)']",
			redoDropdownArrow: "//div[@title='Redo (Ctrl + Y)']/following-sibling::div",
			resize: "//ui-toolbar-button[@title='Resize (Alt + R)']",
			rotateAntiClockwise: "//div[contains(@title, 'Rotate 90° anti clockwise')]",
			rotateAntiClockwiseDropdownArrow: "//div[contains(@title, 'Rotate 90° anti clockwise')]/following-sibling::div",
			rotateClockwise: "//div[contains(@title, 'Rotate 90° clockwise')]",
			rotateClockwiseDropdownArrow: "//div[contains(@title, 'Rotate 90° clockwise')]/following-sibling::div",
			saveTheImageOrAnimationToAFile: "//div[starts-with(@title, 'Save the image or animation to a file')]",
			saveTheImageOrAnimationToAFileDropdownArrow: "//div[starts-with(@title, 'Save the image or animation to a file')]/following-sibling::div",
			setImageExportFormat: "//ui-toolbar-button[@title='Set export image format (Ctrl + E)']",
			sizeInput: "//ui-toolbar-slider/span[text()='Size']/following-sibling::input[@type='number']",
			sizeSlider: "//ui-toolbar-slider/span[text()='Size']/following-sibling::input[@type='range']",
			smooth: "//span[text()='Smooth']/preceding-sibling::*/*",
			thicknessInput: "//ui-toolbar-slider/span[text()='Thickness']/following-sibling::input[@type='number']",
			thicknessSlider: "//ui-toolbar-slider/span[text()='Thickness']/following-sibling::input[@type='range']",
			toggleBackgroundBrightness: "//ui-toolbar-button[@title='Toggle background brightness (Ctrl + B)']",
			toggleGrid: "//div[@title='Toggle grid (Ctrl + G)']",
			toggleGridDropdownArrow: "//div[@title='Toggle grid (Ctrl + G)']/following-sibling::div",
			toggleOnionSkin: "//div[starts-with(@title, 'Toggle onion skin')]",
			toggleOnionSkinDropdownArrow: "//div[starts-with(@title, 'Toggle onion skin')]/following-sibling::div",
			toleranceInput: "//ui-toolbar-slider/span[text()='Tolerance']/following-sibling::input[@type='number']",
			toleranceSlider: "//ui-toolbar-slider/span[text()='Tolerance']/following-sibling::input[@type='range']",
			undo: "//div[@title='Undo (Ctrl + Z)']",
			undoDropdownArrow: "//div[@title='Undo (Ctrl + Z)']/following-sibling::div",
			y: "//*[@id='spinnerEditInput']",
			ySpinner: "//span[text()='Y']/following-sibling::input[@type='number']",
			zoomIn: "//ui-toolbar-button[@title='Zoom in (Ctrl + Plus)']",
			zoomOut: "//ui-toolbar-button[@title='Zoom out (Ctrl + Minus)']",
			zoomReset: "//ui-toolbar-button[@title='Zoom reset (Ctrl + 0)']",
			blocker: "//div[@class='blocker']",
			x: "//*[@id='animationsEditorDialog']//ui-close-button",
		},

		PersistentStorage: {
			ok: "//*[@id='okDialog']//*[@class='okButton']",
			x: "//*[@id='okDialog']//ui-close-button",
		},

		PlatformInfo: {
			copy: "//button[@class='copy']",
			ok: "//*[@id='platformInfoDialog']//*[@class='okButton']",
			x: "//*[@id='platformInfoDialog']//ui-close-button",
		},

		AccountInfo: {
			close: "//button[@class='okButton']",
			editProfile: "//a[text()='Edit profile']",
			help: "//a[text()='Help']",
			logInToExistingAccount: "//a[text()='Log in to existing account']",
			registerAccount: "//a[text()='Register a new account']",
			x: "//*[@id='accountInfoDialog']//ui-close-button",
			yourLicenses: "//a[text()='Your licenses']",
		},

		InstallFinished: {
			ok: "//*[@id='okDialog']//*[@class='okButton']",
			x: "//*[@id='okDialog']//ui-close-button",
		},

		UninstallFinished: {
			ok: "//*[@id='okDialog']//*[@class='okButton']",
			x: "//*[@id='okDialog']//ui-close-button",
		},

		InstallAddon: {
			cancel: "//*[@id='addonConfirmInstallDialog']//*[@class='cancelButton']",
			documentation: "//a[@class='addonDocumentation']",
			install: "//*[@id='addonConfirmInstallDialog']//*[@class='okButton']",
			website: "//a[@class='addonWebsite']",
			x: "//*[@id='addonConfirmInstallDialog']//ui-close-button",
		},

		UninstallAddon: {
			cancel: "//button[@class='cancelConfirmButton']",
			uninstall: "//*[@id='addonConfirmInstallDialog']//*[@class='confirmButton bold']",
			x: "//*[@id='confirmDialog']//ui-close-button",
		},

		AddonManager: {
			AddonContextMenu: {
				downloadAddon: "//span[text()='Download .c3addon']",
				helpFor: "//span[contains(text(),'Help for')]",
				uninstall: "//span[text()='Uninstall']",
				visitWebsite: "//span[text()='Visit website']",
			},

			getAddons: "//a[text()='Get addons']",
			installNewAddon: "//button[@class='installAddon']",
			ok: "//*[@id='addonManagerDialog']//*[@class='okButton']",
			x: "//*[@id='addonManagerDialog']//ui-close-button",

			addon(addon) {
				return "//*[@columnname='name']/*[text()='" + addon + "']/../..";
			},
		},

		About: {
			aboutUs: "//a[text()='About us']",
			contributeTranslations: "//a[text()='Contribute translations']",
			eula: "//a[text()='End-user license agreement']",
			forums: "//a[text()='Forums']",
			getAddons: "//a[text()='Get addons']",
			help: "//*[@id='aboutDialog']//*[@class='helpLink']",
			legalInfo: "//a[text()='Legal information']",
			officialWebsite: "//a[text()='Construct.net']",
			ok: "//*[@id='aboutDialog']//*[@class='okButton']",
			platformInformation: "//a[text()='Platform information']",
			privacyPolicy: "//a[text()='Privacy policy']",
			releaseNotes: "//a[@class='viewReleaseNotes']",
			reportIssues: "//a[text()='Report issues']",
			requestPersistentStorage: "//a[text()='Request persistent storage']",
			storageCleanup: "//a[text()='Storage cleanup...']",
			suggestFeatures: "//a[text()='Suggest features']",
			tutorials: "//a[text()='Tutorials']",
			viewAccountInformation: "//a[text()='View account information']",
			x: "//*[@id='aboutDialog']//ui-close-button",
		},

		CloudOpen: {
			Services: {
				dropBox: "//*[@value='DROPBOX']",
				googleDrive: "//*[@value='GOOGLE DRIVE']",
				oneDrive: "//*[@value='ONE DRIVE']",
			},

			addFolder: "//*[@title='Add Folder']",
			fileNameBox: "//ui-dialog-footer//input",
			logOut: "//*[@title='Logout']",
			refresh: "//*[@title='Refresh']",
			searchBox: "//ui-toolbar-textbox/input",
			serviceSelector: "//select[@corners='default']",
			uploadFile: "//*[@title='Upload File']",
			upToParent: "//*[@title='Up to parent folder']",
			x: "//*[@id='fileListDialog']//ui-close-button",

			cloudFolder(row) {
				return "//ui-table-row[@tabindex='-1'][" + row + "]";
			},
		},

		EnterAccessCode: {
			accessCode: "//input[@class='input']",
			cancel: "//*[@class='cancelButton']",
			ok: "//*[@class='okButton']",
			rememberThisAccessCode: "//*[@class='inputCheckbox']",
			x: "//*[@id='inputCheckDialog']//ui-close-button",
		},

		OpenSecondProject: {
			closePreviousProject: "//button[@class='confirmButton bold']",
			dontAskAgain: "//label[@class='confirmCheckWrap']/input",
			openBothProjects: "//button[@class='cancelConfirmButton']",
			x: "//dialog[@id='confirmCheckDialog']//ui-close-button",
		},

		ExportManager: {
			addArchive: "//*[@title='Add archive']",
			buildApplication: "//*[@title='Build Application']",
			deleteArchive: "//*[@title='Delete archive']",
			downloadArchive: "//*[@title='Download archive']",
			x: "//*[@id='archiveManagerDialog']//ui-close-button",

			export(exportName) {
				return "//*[@columnname='project']/*[text()='" + exportName + "']/../..";
			},
		},

		ExportProject: {
			ExportReport: {
				downloadLink: "//a[@class='downloadExportedProject']",
				ok: "//button[@class='okButton']",
			},

			NwjsOptions: {
				compressFinalZip: "//*[@id='nwjsCompressFinalZip']",
				enableDevTools: "//*[@id='nwjsEnableDevTools']",
				exportForSteam: "//*[@id='nwjsSteamMode']",
				ignoreGpuBlacklist: "//*[@id='nwjsIgnoreGPUBlacklist']",
				kioskMode: "//*[@id='nwjsKioskMode']",
				linux32: "//*[@id='nwjsPlatformLinux32']",
				linux64: "//*[@id='nwjsPlatformLinux64']",
				mac64: "//*[@id='nwjsPlatformMac64']",
				next: "//button[@class='nextButton']",
				packageAssets: "//*[@id='nwjsPackageAssets']",
				resizableWindow: "//*[@id='nwjsResizableWindow']",
				win32: "//*[@id='nwjsPlatformWin32']",
				win64: "//*[@id='nwjsPlatformWin64']",
				windowFrame: "//*[@id='nwjsWindowFrame']",
			},

			Page2: {
				LosslessFormatOptions: {
					png: "//option[@value='png']",
					webp: "//*[@id='exportLosslessImageFormat']//option[@value='webp']",
				},

				LossyFormatOptions: {
					jpg: "//option[@value='jpg']",
					webp: "//*[@id='exportLossyImageFormat']//option[@value='webp']",
				},

				MinifyModes: {
					advanced: "//option[@value='advanced']",
					none: "//option[@value='none']",
					simple: "//option[@value='simple']",
				},

				deduplicateImages: "//*[@id='exportDeduplicateImages']",
				losslessFormat: "//*[@id='exportLosslessImageFormat']",
				lossyFormat: "//*[@id='exportLossyImageFormat']",
				minifyMode: "//select[@class='exportMinifyScript']",
				next: "//button[@class='nextButton']",
				recompressImages: "//*[@id='exportRecompressImages']",
			},

			next: "//button[@class='nextButton']",
			nwjs: "//span[text()='NW.js']/ancestor::ui-iconviewitem",
		},

		FreeEdition: {
			cancel: "//*[@id='addonManagerDialog']//*[@class='cancelButton']",
			learnMore: "//*[@id='addonManagerDialog']//*[@class='infoButton']",
			logInLink: "//a[text()='log in to your account']",
			purchase: "//*[@id='addonManagerDialog']//*[@class='okButton']",
			x: "//*[@id='freeEditionLimitDialog']//ui-close-button",
		},

		GuidedTours: {
			CloseConfirmation: {
				cancel: "//button[@class='cancelConfirmButton']",
				exit: "//button[@class='confirmButton bold']",
				x: "//*[@id='confirmDialog']//ui-close-button",
			},

			exitTour: "//span[text()='Exit tour']/../..",
			menuDots: "//ui-menu-dots-button",
			next: "//button[@class='nextButton bold']",
		},

		LogIn: {
			cancel: "//*[@id='cancel']",
			facebook: "//*[@id='FacebookOAuthLoginButton']",
			keepMeLoggedIn: "//*[@id='remember']",
			logIn: "//*[@id='login']",
			password: "//*[@id='password']",
			signInWithGoogle: "//div[@class='g_id_signin']",
			username: "//*[@id='username']",
			x: "//*[@id='loginDialog']//ui-close-button",
		},
	},
};
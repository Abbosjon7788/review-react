import React, {Component} from 'react';

class FooterContact extends Component {

	constructor() {
		super();
		this.state = {
			isOpen1: false,
			isOpen2: false,
		}

	};

	render(){

		const openDropdown1 = () =>{
			this.setState({isOpen1: !this.state.isOpen1});
		} 

		const openDropdown2 = () =>{
			this.setState({isOpen2: !this.state.isOpen2});
		}	

		return(			

			<div className="xl:mt-32 mt-16 xl:mx-32 md:mx-20 mx-6">
				<div className="xl:flex block xl:pb-20 xl:border-b-2">
					<div className="xl:block flex justify-center xl:w-52 xl:mb-0 mb-16">
						<img src="./maxWayImages/images/logo.svg" alt=""/>
					</div>
					<div className="xl:w-52 w-full xl:mb-0 mb-8">
						<h1 className="font-bold xl:block flex relative item-center xl:text-lg text-xl xl:mb-8 tracking-wider xl:bg-transparent bg-gray-200 xl:py-0 py-4 xl:px-0 px-6 xl:rounded-none rounded-r-full rounded-l-full xl:text-left text-center">
							<span className="xl:w-0 w-full xl:text-left text-center xl:inline-block block">Asosiy</span>
							<span className={`xl:hidden absolute icon ${!this.state.isOpen1 ? 'icon-chevron-down' : 'icon-chevron-up'} icon-black right-8 cursor-pointer icon-w-24`} onClick={openDropdown1}/>
						</h1>
						<div className={`xl:block ${!this.state.isOpen1 ? 'hidden' : 'flex flex-col mt-6 ml-4 justify-center'}`}>
							<a href="#" className="mb-4 block xl:text-left text-center text-gray-400 hover:text-black">Kompaniya haqida</a>
							<a href="#" className="mb-4 block xl:text-left text-center text-gray-400 hover:text-black">Filiallar</a>
							<a href="#" className="mb-4 block xl:text-left text-center text-gray-400 hover:text-black">Bolalar uchun</a>
						</div>
					</div>
					<div className="xl:w-52 w-full xl:mb-0 mb-8">
						<h1 className="font-bold xl:block relative flex item-center xl:text-lg text-xl mb-8 tracking-wider xl:bg-transparent bg-gray-200 xl:py-0 py-4 xl:px-0 px-6 xl:rounded-none rounded-r-full rounded-l-full xl:text-left text-center">
							<span className="xl:w-0 w-full xl:text-left text-center xl:inline-block block ">Qo'shimcha</span>
							<span className={`xl:hidden icon ${!this.state.isOpen2 ? 'icon-chevron-down' : 'icon-chevron-up'} absolute icon-black right-8 icon-w-24 cursor-pointer`} onClick={openDropdown2}/>
						</h1>
						<div className={`xl:block ${!this.state.isOpen2 ? 'hidden' : 'flex flex-col mt-6 ml-4 justify-center'}`}>
							<a href="#" className="mb-4 block xl:text-left text-center text-gray-400 hover:text-black">Menyu</a>
							<a href="#" className="mb-4 block xl:text-left text-center text-gray-400 hover:text-black">Bonusli karta</a>
							<a href="#" className="mb-4 block xl:text-left text-center text-gray-400 hover:text-black">Bu qanday ishlaydi?</a>
						</div>
					</div>
					<div className="xl:ml-auto">
						<h1 className="xl:block hidden font-bold text-lg mb-8 tracking-wider">Biz bilan aloqa</h1>
						<div className="xl:text-left text-center">
							<a href="#" className="tracking-widest xl:mt-0 mt-20 xl:mb-0 mb-12 xl:text-2xl text-4xl font-semibold block mb-8">(+998 71) 200-54-00</a>
							<p className="text-gray-500 xl:text-base text-2xl">100011, Toshkent sh, Shayxontohur tumani, <br/> Zarqaynar ko'chasi, 3B-uy</p>
						</div>
					</div>

				</div>

				<div className="flex xl:flex-row flex-col-reverse item-center justify-between py-12">
					<span className="text-gray-500 block xl:mt-0 mt-16 text-center text-sm">©️ Maxway, 2020</span>
					<div className="flex xl:w-1/4 w-full item-center justify-around">
						<a href="#" className="icon icon-gray icon-youtube"/>
						<a href="#" className="icon icon-gray icon-facebook"/>
						<a href="#" className="icon icon-gray icon-instagram"/>
						<a href="#" className="icon icon-gray icon-telegram"/>
						<a href="#" className="icon icon-gray icon-tiktok"/>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterContact;
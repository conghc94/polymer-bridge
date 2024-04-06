import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = (props) => {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Polymer Labs</span>
                        <img className="h-8 w-auto" src="https://assets-global.website-files.com/61dd1a9a1229241c240eea18/61dd1a9a12292419230eea32_Logo-Dark.svg" alt="" />
                    </a>
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end absolute top-[20px] right-[10px]">
                    <ConnectButton />
                </div>
            </nav>
        </header>
    )
}

export default Header;
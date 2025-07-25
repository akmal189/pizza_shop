import logo from '../../assets/img/pizza-logo.svg';

export default function Header() {
    return (
        <header className="site-header px-5 border-b border-gray-200">
            <div className="max-w-7xl mx-auto py-10 flex items-center justify-between gap-5">
                <div className="flex items-center gap-3.5">
                    <div>
                        <img src={logo} alt="logo" className="w-9" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">React Pizza</h1>
                        <p className="text-gray-500">самая вкусная пицца во вселенной!</p>
                    </div>
                </div>
                <div>
                    <form className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6">
                            <svg enableBackground="new 0 0 32 32" id="EditableLine" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></circle><line fill="none" id="XMLID_44_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366"></line></svg>
                        </div>
                        <input type="text" className="border border-gray-400 rounded-xl py-2.5 px-5 pl-10" placeholder="Поиск пиццы..." />
                    </form>
                </div>
                <div className="flex items-center gap-5 bg-primary-500 rounded-4xl px-5 py-2.5 text-white text-base">
                    <div>0 р.</div>
                    <div>|</div>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
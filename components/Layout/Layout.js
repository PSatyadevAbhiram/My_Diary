import MainNavigation from "./MainNavigation";

function Layout(props){
    return (
        <div>
            <MainNavigation>
                <main>{props.children}</main>
            </MainNavigation>
        </div>
    );
}

export default Layout;
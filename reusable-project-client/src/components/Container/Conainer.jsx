
const Container = ({children}) => {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {children}
        </div>
    );
};

export default Container;
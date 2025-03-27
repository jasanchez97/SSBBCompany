import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./RegisterProducts.css";
import BackgroundVideo4 from "../../components/BackgroundVideo4/BackgroundVideo4";
import Crud from "../../components/CRUD/Crud";

function RegisterProducts() {
    return (
        <>
            <Header />
            <BackgroundVideo4 />
            <div className="crud-main">
                <h1 className="crud-title-register-products">Registro de Productos</h1>
                <Crud />
            </div>
            <Footer />
        </>
    );
}

export default RegisterProducts;
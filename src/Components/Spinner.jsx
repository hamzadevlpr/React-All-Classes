import { Spinner } from 'react-bootstrap';
import ClipLoader from "react-spinners/ClipLoader";
function Spinner() {
    let [loading, setLoading] = useState(true);

    return (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader
                color="#ffffff"
                // loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Spinner;

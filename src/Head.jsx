import img from  './assets/images/image-omelette.jpeg'

export default function Head() {
    return (
        <div className="head">
            <img src={img} />
            <h1>Simple Omelette Recipe</h1>
            <p>
                An easy and quick dish, perfect for any
                meal. The classic omelette combines beaten
                eggs cooked to perfection, optionally filled
                with your choice of cheese, vegetables, or
                meats.
            </p>
            <div>
                <h3>Preparation time</h3>
                <ul>
                    <li><strong>Total</strong>: Approximately 10 minutes</li>
                    <li><strong>Preparation</strong>: 5 minutes</li>
                    <li><strong>Cooking</strong> 5 minutes</li>
                </ul>
            </div>
        </div>
    )
}
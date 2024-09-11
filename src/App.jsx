import Head from "./Head";
import Section from "./Section";

export default function App() {

    return (
        <div className="container">
            <Head />
            <Section title="Ingredients">
                <ul>
                    <li>2-3 large eggs</li>
                    <li>Salt, to taste</li>
                    <li>Pepper, to taste</li>
                    <li>1 tablespoon of butter or oil</li>
                    <li>Optional fillings: cheese, diced
                        vegetables, cooked meats, herbs
                    </li>
                </ul>
            </Section>
            <hr />
            <Section title="Instructions">
                <ol>
                    <li><strong>Beat the eggs</strong>: In a bowl, beat the
                        eggs with a pinch of salt and pepper until they are
                        well mixed. You can add a tablespoon of water or milk 
                        for a fluffier texture
                    </li>
                    <li>
                        <strong>Heat the pan</strong>: Place a non-stick frying
                        pan over medium heat and add butter
                        or oil.
                    </li>
                    <li>
                        <strong>Cook the omelette</strong>: Once the butter is
                        melted and bubbling, pour in the eggs.
                        Tilt the pan to ensure the eggs evenly
                        coat the surface.
                    </li>
                    <li>
                        <strong>Add fillings (optional)</strong>: When the eggs
                        begin to set at the edges but are still 
                        slightly runny in the middle, sprinkle 
                        your chosen fillings over one half of 
                        the omelette.
                    </li>
                    <li>
                        <strong>Fold and serve</strong>: As the omelette
                        continues to cook, carefully lift one
                        edge and fold it over the fillings. Let it
                        cook for another minute, then slide it 
                        onto a plate.
                    </li>
                    <li>
                        <strong>Enjoy</strong>: Serve hot, with additional salt 
                        and pepper if needed.
                    </li>
                </ol>
            </Section>
            <hr />
            <Section title="Nutrition">
                <p>
                    The table below shows nutritional values
                    per serving without the additional fillings.
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td>Calories</td>
                            <td>277kcal</td>
                        </tr>
                        <tr>
                            <td>Carbs</td>
                            <td>0g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>20g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>22g</td>
                        </tr>
                    </tbody>
                </table>
            </Section>
        </div>
    )
}
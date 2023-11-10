
# Composant React de Rating

Ce composant React, appelé "Rating", est conçu pour afficher et recueillir des évaluations sous forme d'étoiles. Il offre une interface utilisateur interactive pour sélectionner et afficher un certain nombre d'étoiles en fonction de la note attribuée.

## Utilisation

1. **Importation :**

   ```jsx
   import Rating from './Rating';
   import './rating.css';

2. **Propriétés :**

    handleRating: Une fonction de rappel appelée lorsqu'une étoile est sélectionnée. Cette fonction reçoit la valeur de l'étoile sélectionnée en paramètre.

    value: La valeur actuelle du rating, utile pour préremplir le composant avec une note existante.

    min: La valeur minimale possible du rating (non utilisée dans le composant actuel).

    max: La valeur maximale possible du rating, déterminant le nombre total d'étoiles affichées.

    className: Une classe CSS optionnelle à appliquer au conteneur du composant pour une personnalisation aisée.

3. **Exemple d'utilisation**
      ```jsx
    const handleRatingChange = (newValue) => {
    console.log('Nouvelle valeur de rating :', newValue);
    // Mettez à jour l'état ou effectuez d'autres actions en conséquence.
    };

    <Rating
    handleRating={handleRatingChange}
    value={3} // La valeur actuelle du rating
    min={1}   // Non utilisé dans le composant actuel
    max={5}   // Le nombre total d'étoiles
    className="custom-rating" // Classe CSS optionnelle
    />


5. **Fonctionnement**
    Survolez : Lorsque l'utilisateur survole une étoile, les étoiles précédentes et l'étoile actuelle deviennent "hovered", offrant une indication visuelle de la note potentielle.

    Cliquez : Lorsqu'une étoile est cliquée, la fonction handleRating est invoquée avec la valeur de l'étoile sélectionnée.

    Affichage : Les étoiles sont représentées par le caractère "★", avec la classe CSS "selected" indiquant les étoiles choisies.

6. **Styles**
    Le composant utilise un fichier de style externe, "rating.css", pour permettre une personnalisation facile des styles des étoiles. Assurez-vous d'importer ce fichier pour obtenir l'apparence souhaitée.



###### English ######

# React Rating Component
    The React component "Rating" provides a straightforward and interactive solution for displaying and collecting star-based ratings. It allows users to rate an item by selecting the number of stars corresponding to their evaluation.

## Usage:

1. **Import:**

    Make sure to import the component and the associated style file into your file where you intend to use it.

      ```jsx
    import Rating from './Rating';
    import './rating.css';

2. **Properties:**

    handleRating: A callback function invoked when a star is selected. This function receives the value of the selected star as a parameter.

    value: The current rating value, useful for prefilling the component with an existing rating.

    min: The minimum possible rating value (not used in the current component).

    max: The maximum possible rating value, determining the total number of displayed stars.

    className: An optional CSS class to apply to the component container for easy customization.

3. **Usage Example:**

       ```jsx
    const handleRatingChange = (newValue) => {
    console.log('New rating value:', newValue);
    // Update state or perform other actions accordingly.
    };

    <Rating
    handleRating={handleRatingChange}
    value={3} // The current rating value
    min={1}   // Not used in the current component
    max={5}   // The total number of stars
    className="custom-rating" // Optional CSS class
    />

4. **Functionality**
Hover: When the user hovers over a star, previous stars and the current star become "hovered," providing a visual indication of the potential rating.

Click: When a star is clicked, the handleRating function is called with the value of the selected star.

Display: Stars are represented by the "★" character, with the "selected" CSS class indicating chosen stars.

5. **Styles**
    The component uses an external style file, "rating.css," allowing easy customization of star styles. Make sure to import this file to achieve the desired appearance.

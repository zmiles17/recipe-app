import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const DirectoryView = (props) => (
    <div>
        <SearchForm changeHandler={props.changeHandler} searchVal={props.searchVal} selectRecipes={props.selectRecipes} />
        {props.recipes.map((recipe, i) => <RecipeCard recipes={recipe} key={i} />)}
        <div className='results'></div>
    </div>
)

const SearchForm = (props) => (
    <form>
        <input placeholder='Search Text Here' onChange={props.changeHandler} value={props.searchVal} />
        <button onClick={props.selectRecipes}>SEARCH</button>
    </form>
)

const RecipeCard = (props) => (
    <div>{props.recipes.name}</div>
)

const DetailView = (props) => (
    <div>
        {props.recipe.name},
        {props.recipe.ingredients},
        {props.recipe.instructions}
    </div>
)

class App extends React.Component {
    state = {
        recipes: [
            {
                id: 1,
                name: 'turkey + stuff',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 2,
                name: 'mac and cheese',
                ingredients: ['macaroni', 'cheese'],
                instructions: ['pre-heat over to 350', 'mix mac and cheese in pan', 'place in oven']
            },
            {
                id: 3,
                name: 'turkey3',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 4,
                name: 'turkey4',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 5,
                name: 'turkey5',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 6,
                name: 'turkey6',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 7,
                name: 'turkey7',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 8,
                name: 'turkey8',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 9,
                name: 'turkey9',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 10,
                name: 'turkey10',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 11,
                name: 'turkey11',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 12,
                name: 'turkey12',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 13,
                name: 'turkey13',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 14,
                name: 'turkey14',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            },
            {
                id: 15,
                name: 'turkey15',
                ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
                instructions: ['pre-heat over to 350', 'tickle the turkey', 'cut some celery']
            }
        ],
        searchVal: '',
        selectedRecipes: []
    }

    handleChange = (e) => {
        this.setState({ searchVal: e.target.value })
    }

    selectRecipes = (e) => {
        e.preventDefault();
        const searchVal = this.state.searchVal.toLowerCase();
        const filteredRecipes = this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(searchVal));
        this.setState({ selectedRecipes: filteredRecipes })
    }

    // userClick = (e) => {

    // }

    render() {
        const recipeList = this.state.selectedRecipes;
        return (
            <React.Fragment>
            <DirectoryView
                recipes={recipeList}
                changeHandler={this.handleChange}
                searchVal={this.state.searchVal}
                selectRecipes={this.selectRecipes}
            />
            <DetailView
                recipe={this.state.recipes[0]}
            />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


const activeStateElement = document.querySelector('#activated h3');
const stateListElement = document.querySelector('#statesList');

const goals = [
    {
        id: 'g1',
        text: 'Life is short, <abbr title=\"Let\'s go!!\">#LFG</abbr> 👍'
    },
    {
        id: 'g2',
        text: 'Take a deep breath and enjoy every moment 🙂'
    },
    {
        id: 'g3',
        text: 'Be humble 🙇‍; express Gratitude 🙏'
    },
];

function setActiveStateHandler(goalid) {
    const selectedState = goals.find(g => g.id === goalid);
    activeStateElement.innerHTML = selectedState.text;
}

function initializePage() {
    for (const goal of goals) {
        const stateElement = document.createElement('div');
        stateElement.innerHTML = `
        <p>${goal.text}</p>
        <button type="button" class="btn btn-outline-primary">Activate State</button>
      `;
        stateElement.className = 'row internal';
        stateElement.querySelector('button').addEventListener('click', () => {
            setActiveStateHandler(goal.id);
        });
        stateListElement.append(stateElement);
    }
}

initializePage();
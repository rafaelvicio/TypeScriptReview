const controller = new NegociacaoController();

document
    .querySelector('.from')
    .addEventListener('submit', controller.adicionar.bind(controller));
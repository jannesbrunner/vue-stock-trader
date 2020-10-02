const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find( element => element.id == stockId)
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push( {
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= stockPrice * quantity;
    },

    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStock( {commit}, order) {
        commit('SELL_STOCK', order);
    }
}

const getters = {
    // state is the overall state of the global store
    // injecting all getters to access the stocks of stocks module
    stockPortfolio(gState, gGetters) {
        return gState.stocks.map(stock => {
            const record = gGetters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
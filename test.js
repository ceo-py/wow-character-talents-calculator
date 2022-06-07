function sortTickets(arr = [], criteria = "") {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];
    for (let line of arr) {
        let tokens = line.split("|");
        let city = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];
        result.push(new Ticket(city, price, status));
    }

    switch (criteria) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }
    return result;
}
export function inputStateUpdate(event, that) {
    that.setState({ [event.target.name]: event.target.value });
}

export function liftedStateUpdate(name, value, that) {
    that.setState({ [name]: value });
}
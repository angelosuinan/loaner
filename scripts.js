$h

class NameField extends React.Component {

    constructor() {
        this.state = {
            field1: '',
            field2: '',
        };
        super(this)
    }

    handleChange(e) {
        //this.setState({e.target.id: e.target.value});
    }
---------------updatestates--------
    render() {
        return (
            <form>
                <input type="text" id='field1' value={this.state.field1} onChange={this.handleChange}>
                <input type="text" id='field2' value={this.state.field2} onChange={this.handleChange}>
            </form>
        );
    }
}


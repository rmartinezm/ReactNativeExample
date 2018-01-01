import React, { Component } from 'react';
import { View, Text, List } from 'react-native';
import { connect } from 'react-redux';

class UsersListComponent extends Component {
    render (){
        return (
            <View>
                <Text>Simple List of Users</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(UsersListComponent)
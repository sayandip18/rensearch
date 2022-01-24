import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import axios from 'axios';
import { SearchBar } from 'react-native-elements';

function ViewAndSearch() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
            setData(response.data);
            setSearchData(response.data);
            setIsLoading(false);
            console.log(data);
        }
        fetchData();
    }, []);
    
    const searchFunction = search => {
        const filtered = searchData.filter(
            item => (item.title.toLowerCase().includes(search.toLowerCase()))
        );
        setSearch(search);
        setData(filtered);
    }

    return (
        <SafeAreaView>
            <SearchBar
                placeholder="type here..."
                onChangeText={searchFunction}
                value={search}
            />
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={data}
                    renderItem={ ({item}) => { 
                        return <Text>{item.title}</Text>
                    }}
                />   
            )}
        </SafeAreaView>
    );
}

export default ViewAndSearch;


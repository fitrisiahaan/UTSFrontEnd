import { View, Text } from 'react-native';
import { Heading } from 'native-base';
import TabsNavigation from '../components/TabsNavigation';
import JobsCard from '../components/JobsCard';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Heading >Heading Text</Heading>
            
            <SearchBar />
            <View style={{ flex: 1 }}>
                <JobsCard />
            </View>
            <TabsNavigation />
        </View>
    );
};

export default SearchScreen;
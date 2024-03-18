import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// דמה לפונקציית טעינת השאלות והתשובות
const fetchFAQs = async () => {
    // כאן תבצע קריאה ל-API או למקור הנתונים שלך
    return [
        { question: 'שאלה 1', answer: 'תשובה 1' },
        { question: 'שאלה 2', answer: 'תשובה 2' },
        // הוסף כאן שאלות נוספות
    ];
};

const FAQScreen = () => {
    const [faqs, setFaqs] = useState([]);
    const [filteredFaqs, setFilteredFaqs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(() => {
        const initFAQs = async () => {
            const fetchedFaqs = await fetchFAQs();
            setFaqs(fetchedFaqs);
            setFilteredFaqs(fetchedFaqs);
        };
        initFAQs();
    }, []);

    const searchFAQ = (query) => {
        setSearchQuery(query);
        if (query.trim()) {
            const filtered = faqs.filter(faq =>
                faq.question.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredFaqs(filtered);
        } else {
            setFilteredFaqs(faqs);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="חפש שאלות..."
                value={searchQuery}
                onChangeText={searchFAQ}
                style={styles.searchBox}
            />
            <FlatList
                data={filteredFaqs}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.faqItem}>
                        <Text style={styles.question}>{item.question}</Text>
                        <Text style={styles.answer}>{item.answer}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        width:"80%"

    },
    searchBox: {
        fontSize: 18,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    faqItem: {
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    question: {
        fontWeight: 'bold',
    },
    answer: {
        color: 'gray',
    },
});

export default FAQScreen;

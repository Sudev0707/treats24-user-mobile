import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, TextInput } from 'react-native';
import styles from '../../styles/components/HelpCenterStyles';
import colors from '../../theme/colors';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
  const [expandedFAQs, setExpandedFAQs] = useState<{ [key: string]: boolean }>({});

  const faqCategories: FAQCategory[] = [
    {
      title: 'Ordering',
      items: [
        { question: 'How do I place an order?', answer: 'Browse restaurants, select items, add to cart, and proceed to checkout.' },
        { question: 'Can I order from multiple restaurants?', answer: 'No, each order must be from a single restaurant to ensure timely delivery.' },
        { question: 'How do I add special instructions?', answer: 'You can add special instructions for your order during checkout.' },
        { question: 'What if an item is out of stock?', answer: 'If an item is unavailable, you will be notified during checkout or by the restaurant.' },
      ],
    },
    {
      title: 'Payments',
      items: [
        { question: 'What payment methods are accepted?', answer: 'We accept credit/debit cards, UPI, net banking, and cash on delivery.' },
        { question: 'Is my payment information secure?', answer: 'Yes, all payments are processed through secure gateways with encryption.' },
        { question: 'Can I get a refund?', answer: 'Refunds are processed within 5-7 business days for eligible orders.' },
        { question: 'How do I update my payment method?', answer: 'Go to Profile > Payment Methods to add or update your cards.' },
      ],
    },
    {
      title: 'Account',
      items: [
        { question: 'How do I update my profile?', answer: 'Tap on \'Edit Profile\' in the Profile screen to update your information.' },
        { question: 'How do I reset my password?', answer: 'Use the \'Forgot Password\' option on the login screen.' },
        { question: 'Can I have multiple addresses?', answer: 'Yes, you can save multiple delivery addresses in your profile.' },
        { question: 'How do I delete my account?', answer: 'Contact support to request account deletion.' },
      ],
    },
    {
      title: 'Delivery',
      items: [
        { question: 'How can I track my order?', answer: 'Go to the Orders section in your profile to view order status and live tracking.' },
        { question: 'What are the delivery charges?', answer: 'Delivery charges vary by restaurant and distance, shown during checkout.' },
        { question: 'How long does delivery take?', answer: 'Delivery time depends on the restaurant and distance, typically 30-60 minutes.' },
        { question: 'What if my order is late?', answer: 'Contact support for delayed orders; we may offer compensation.' },
      ],
    },
  ];

  const openWhatsApp = () => {
    const phoneNumber = '7488854261';
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(() => {
      Linking.openURL(`https://wa.me/${phoneNumber}`);
    });
  };

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle],
    }));
  };

  const toggleFAQ = (faqKey: string) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [faqKey]: !prev[faqKey],
    }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.items.length > 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:90}}>
      {/* <TextInput
        style={styles.searchBar}
        placeholder="Search FAQs..."
        placeholderTextColor={colors.textMuted}
        value={searchQuery}
        onChangeText={setSearchQuery}
      /> */}
      {filteredCategories.map(category => (
        <View key={category.title} style={styles.section}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => toggleCategory(category.title)} style={styles.categoryHeader}>
            <Text style={styles.sectionTitle}>{category.title}</Text>
            <Text style={styles.expandIcon}>{expandedCategories[category.title] ? '-' : '+'}</Text>
          </TouchableOpacity>
          {expandedCategories[category.title] && (
            <View>
              {category.items.map((item, index) => {
                const faqKey = `${category.title}-${index}`;
                return (
                  <View key={faqKey} style={styles.faqItem}>
                    <TouchableOpacity onPress={() => toggleFAQ(faqKey)}>
                      <Text style={styles.question}>
                        {item.question}
                        <Text style={styles.expandIconSmall}> {expandedFAQs[faqKey] ? '−' : '+'}</Text>
                      </Text>
                    </TouchableOpacity>
                    {expandedFAQs[faqKey] && (
                      <Text style={styles.answer}>{item.answer}</Text>
                    )}
                  </View>
                );
              })}
            </View>
          )}
        </View>
      ))}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.contactText}>Email: support@foodee.com</Text>
        <Text style={styles.contactText}>Phone: +1-800-FOOD-EE</Text>
        <Text style={styles.contactText}>Hours: Mon-Fri 9AM-6PM</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.whatsappButton} onPress={openWhatsApp}>
          <Text style={styles.whatsappButtonText}>Chat on WhatsApp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Policies</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://foodee.com/privacy-policy')}>
          <Text style={styles.policyLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://foodee.com/terms-of-service')}>
          <Text style={styles.policyLink}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HelpCenter;

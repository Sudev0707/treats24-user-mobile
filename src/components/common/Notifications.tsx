import React from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import styles from '../../styles/components/NotificationsStyles';

const Notifications: React.FC = () => {
  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [emailNotifications, setEmailNotifications] = React.useState(false);
  const [smsNotifications, setSmsNotifications] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notification Preferences</Text>
        <View style={styles.notificationItem}>
          <View>
            <Text style={styles.notificationText}>Push Notifications</Text>
            <Text style={styles.notificationSubText}>Receive push notifications for orders and updates</Text>
          </View>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
          />
        </View>
        <View style={styles.notificationItem}>
          <View>
            <Text style={styles.notificationText}>Email Notifications</Text>
            <Text style={styles.notificationSubText}>Receive order updates via email</Text>
          </View>
          <Switch
            value={emailNotifications}
            onValueChange={setEmailNotifications}
          />
        </View>
        <View style={styles.notificationItem}>
          <View>
            <Text style={styles.notificationText}>SMS Notifications</Text>
            <Text style={styles.notificationSubText}>Receive order updates via SMS</Text>
          </View>
          <Switch
            value={smsNotifications}
            onValueChange={setSmsNotifications}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;

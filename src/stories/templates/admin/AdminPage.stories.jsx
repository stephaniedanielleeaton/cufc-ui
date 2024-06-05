import React from 'react';
import AdminPage from './AdminPage.jsx';

export default {
  title: 'Templates/AdminPage',
  component: AdminPage,
  tags: ['autodocs'],
};

const handleOnNavigationClick = (message) => {
  console.log(message);
};

const Template = (args) => <AdminPage {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {
  onNavigationClick: handleOnNavigationClick,
  members: [
    {
      _id: '6653a720a06fc258e184da8f',
      square_customer_id: 'H168BJDJTC6NW6A8SGF0F9VY3G',
      display_first_name: 'Edith',
      display_last_name: 'Eaton',
      personal_info: {
        legal_first_name: 'Edith',
        legal_last_name: 'Eaton',
        email: 'longbelly@gmail.com',
        phone: '2812240455',
        date_of_birth: '1991-07-29T00:00:00.000Z',
        address: {
          street: '437 Woodside Lake Dr',
          city: 'Gahanna',
          state: 'OH',
          zip: '43230',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '74103469-2262-4372-b5cd-25d254e21835',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'H168BJDJTC6NW6A8SGF0F9VY3G',
          startDate: '2024-05-28',
          canceledDate: '2024-06-28',
          chargedThroughDate: '2024-06-28',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBmStBr_59KHsjYfVH8iLKLEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:31:38-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 28,
          phases: [
            {
              uid: '26709972-9f29-4c11-b87b-f3f86966ff61',
              ordinal: 0,
              orderTemplateId: 'e822Hh8Q1R5dHLWr1r1rtaQWTv6YY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
        {
          id: 'b21afbb9-f1ed-456e-8435-bad156d9b14d',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'H168BJDJTC6NW6A8SGF0F9VY3G',
          startDate: '2024-05-28',
          canceledDate: '2024-06-28',
          chargedThroughDate: '2024-06-28',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChDCkJgKmif9SdKCEhl7yj8REJ0L'],
          version: 1,
          createdAt: '2024-05-28T13:36:43-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 28,
          phases: [
            {
              uid: 'd093627a-84df-48f9-9815-67d39161caa2',
              ordinal: 0,
              orderTemplateId: 'mAqCqoH4EygBkBbBmaYR9nCMTF6YY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
        {
          id: 'c622cff1-01be-4f26-a281-4ec9444d84f2',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'H168BJDJTC6NW6A8SGF0F9VY3G',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBFtwhBKShVdcdb0USXmRzTEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:47:30-04:00',
          cardId: 'ccof:CA4SEHcjcE1U_DWN2em1YcGvDgEoAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '0298db97-7da3-44f7-a3be-3c8ad583c179',
              ordinal: 0,
              orderTemplateId: 'GoABfeF2nKJAsWl71rghUZdbyOWZY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChBFtwhBKShVdcdb0USXmRzTEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'yuiSr9voq4qrceSmDuOcRwuQa6FZY',
          primaryRecipient: {
            customerId: 'H168BJDJTC6NW6A8SGF0F9VY3G',
            givenName: 'Trevor',
            familyName: 'Pedersen',
            emailAddress: 'trevwap@gmail.com',
            address: {
              addressLine1: '437 Woodside Lake Dr',
              locality: 'Gahanna',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43230',
            },
            phoneNumber: '+12812240455',
          },
          paymentRequests: [
            {
              uid: '8a470840-13f2-4d52-a979-d61d21b8a0ba',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEHcjcE1U_DWN2em1YcGvDgEoAQ',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000008',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChBFtwhBKShVdcdb0USXmRzTEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T14:12:53Z',
          updatedAt: '2024-06-01T14:12:55Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'c622cff1-01be-4f26-a281-4ec9444d84f2',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T14:12:53.000Z',
      role: 'coach',
      checkedIn: false,
    },
    {
      _id: '665939690dfd58118f77768c',
      square_customer_id: '',
      display_first_name: 'Toby',
      display_last_name: 'Crackel',
      personal_info: {
        legal_first_name: 'Toby',
        legal_last_name: 'Crackel',
        email: 'ray.derek.a@gmail.com',
        phone: '',
        date_of_birth: null,
        address: {
          street: '2753 Hafton Woods Ct',
          city: 'Columbus',
          state: 'OH',
          zip: '43204',
          country: 'United States',
        },
      },
      subscription_status: '',
      subscription_start_date: null,
      square_invoices: [],
      last_invoice_status: '',
      last_invoice_date: null,
      role: 'coach',
      checkedIn: false,
    },
  ],
};

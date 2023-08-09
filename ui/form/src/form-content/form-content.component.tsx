import React                  from 'react'
import { FC }                 from 'react'
import { useState }           from 'react'
import { useEffect }          from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

import { Button }             from '@ui/button'
import { Condition }          from '@ui/condition'
import { Drawer }             from '@ui/drawer'
import { Input }              from '@ui/input'
import { Layer }              from '@ui/layer'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { NextLink }           from '@ui/link'
import { Space }              from '@ui/text'
import { Text }               from '@ui/text'
import { useLanguage }        from '@globals/language'
import { messages }           from '@globals/messages'

import { FormFieldNode }      from '../data'
import { useForms }           from '../data'
import { useSubmit }          from '../data'
import { verifyRecaptcha }    from '../data'

type FormFields = 'firstname' | 'phone' | 'email' | 'textbox';

const defaultFormFields: Record<FormFields, string> = {
  firstname: '',
  phone: '',
  email: '',
  textbox: '',
};

const FormContent: FC = () => {
  const [formFieldsValues, setFormFieldsValues] = useState(defaultFormFields);
  const [formErrorsFields, setFormErrorsFields] = useState<string[]>([]);
  const [formStatus, setFormStatus] = useState<'send' | 'sent' | 'notSent'>('send');
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [language] = useLanguage();
  const [fields] = useForms();
  const [submit] = useSubmit();

  useEffect(() => {
    if (formStatus !== 'send') {
      setTimeout(() => setFormStatus('send'), 2000);
    }
  }, [formStatus]);

  const handleSendForm = async () => {
    try {
      if (!executeRecaptcha || Array.isArray(fields)) {
        return;
      }

      let emptyFields: string[] = [];

      for (const key in formFieldsValues) {
        const isRequired = fields[language].find((field) => field.type === key)?.required || false;

        if (isRequired && formFieldsValues[key] === '') {
          emptyFields.push(key);
        }
      }

      if (emptyFields.length !== 0) {
        setFormErrorsFields(emptyFields);
        setFormStatus('notSent');

        return;
      }

      const token = await executeRecaptcha('submit');
      
      const { success } = await verifyRecaptcha(token);

      if (!token || !success) {
        setFormStatus('notSent');

        return;
      }

      const { data } = await submit({ variables: formFieldsValues });

      if (!data?.submitForm.success) {
        setFormStatus('notSent');

        return;
      }

      setFormStatus('sent');
      setFormFieldsValues(defaultFormFields);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeField = (value: string, field: string) => {
    setFormFieldsValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleClosePrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(false);
  };

  return (
    <>
      <Drawer
        active={isPrivacyPolicyOpen}
        onClose={handleClosePrivacyPolicy}
        display="privacy-policy"
      />
      <Layer
        visible={isPrivacyPolicyOpen}
        onClose={handleClosePrivacyPolicy}
        display="privacy-policy"
      />
      <Box width="100%" maxWidth={['100%', '100%', 859]} height="100%">
        <Column width="100%">
          <Condition match={!Array.isArray(fields)}>
            {fields[language]?.map((field: FormFieldNode) => (
              <Condition match={formFieldsValues[field.type] !== undefined} key={field.type}>
                <Layout maxHeight={[58, 58, 62]}>
                  <Input
                    value={formFieldsValues[field.type]}
                    onChange={(value) => handleChangeField(value, field.type)}
                    error={formErrorsFields.includes(field.type)}
                    placeholder={`${field.label}${field.required ? '*' : ''}`}
                  />
                </Layout>
                <Layout flexBasis={32} />
              </Condition>
            ))}
          </Condition>
          <Layout>
            <Button
              width="100%"
              height={[48, 48, 52]}
              px={0}
              success={formStatus === 'sent'}
              failure={formStatus === 'notSent'}
              onClick={handleSendForm}>
              <Condition match={formStatus === 'send'}>{messages.send[language]}</Condition>
              <Condition match={formStatus === 'sent'}>{messages.sent[language]}</Condition>
              <Condition match={formStatus === 'notSent'}>{messages.notSent[language]}</Condition>
            </Button>
          </Layout>
          <Layout flexBasis={[24, 24, 32]} />
          <Row justifyContent="center">
            <Layout width={[335, 335, '100%']}>
              <NextLink
                fontSize="atomic"
                textAlign="center"
                width="100%"
                whiteSpace="normal"
                color="text.secondary"
                display="flex"
                onClick={() => setIsPrivacyPolicyOpen(true)}>
                <Text color="text.secondary" display="inline" whiteSpace="normal" fontSize="atomic">
                  {messages.byClickingYouConfirm[language]}
                  <Space />
                  <Text
                    style={{ textDecoration: 'underline' }}
                    display="inline"
                    whiteSpace="normal"
                    color="text.secondary">
                    {messages.privacyPolicy[language]}
                  </Text>
                </Text>
              </NextLink>
            </Layout>
          </Row>
        </Column>
      </Box>
    </>
  );
};

export { FormContent };

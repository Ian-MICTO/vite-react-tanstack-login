import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Login() {
    return (
        <div className="w-full max-w-md">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Payment Method</FieldLegend>
                        <FieldDescription>
                            All transactions are secure and encrypted
                        </FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                    Name on Card
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-name-43j"
                                    placeholder="Evil Rabbit"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                    Card Number
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-number-uw1"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                                <FieldDescription>
                                    Enter your 16-digit card number
                                </FieldDescription>
                            </Field>
                            <div className="grid grid-cols-3 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="checkout-exp-month-ts6">
                                        Month
                                    </FieldLabel>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                                        Year
                                    </FieldLabel>

                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                                    <Input id="checkout-7j9-cvv" placeholder="123" required />
                                </Field>
                            </div>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />
                    <FieldSet>
                        <FieldLegend>Billing Address</FieldLegend>
                        <FieldDescription>
                            The billing address associated with your payment method
                        </FieldDescription>
                        <FieldGroup>
                            <Field orientation="horizontal">
                                <FieldLabel
                                    htmlFor="checkout-7j9-same-as-shipping-wgm"
                                    className="font-normal"
                                >
                                    Same as shipping address
                                </FieldLabel>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                    Comments
                                </FieldLabel>
                                <Textarea
                                    id="checkout-7j9-optional-comments"
                                    placeholder="Add any additional comments"
                                    className="resize-none"
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button type="submit">Submit</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}

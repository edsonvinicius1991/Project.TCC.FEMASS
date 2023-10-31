import "./Shipping.css";
import * as React from "react";
import { FormSelect } from "react-bootstrap";

function Shipping(props) {
    return (
        <div>
            <div className="div">SHIPPING</div>
            <div className="div-2" maxWidth={1200} lazyLoad={false}>
                <section className="section">
                    <div className="div-3">
                        <div className="div-4">
                            <div className="column">
                                <div className="div-5">
                                    <h3>ORIGEM</h3>
                                </div>
                                <FormSelect
                                    name="combobox-origem"
                                    defaultValue="Selecione origem"
                                    className="form-select"
                                    options={[
                                        {
                                            value: "option 1",
                                        },
                                        {
                                            value: "option 2",
                                        },
                                    ]}
                                    required={false}
                                />
                            </div>
                            <div className="column-2">
                                <div className="div-6">
                                    <h3 br-vh-fix="">DESTINO</h3>
                                </div>
                                <FormSelect
                                    name="combobox-origem"
                                    defaultValue="Selecione origem"
                                    className="form-select"
                                    options={[
                                        {
                                            value: "option 1",
                                        },
                                        {
                                            value: "option 2",
                                        },
                                    ]}
                                    required={false}
                                />
                            </div>
                            <div className="column-3">
                                <button className="button" openLinkInNewTab={false}>
                                    + ADD CONTAINER
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="div-7">
                        <div>
                            <div className="div-8">
                                <h3>EXPORT TO: </h3>
                            </div>
                            <div className="div-9">
                                <button className="button-2" openLinkInNewTab={false}>
                                    Excel
                                </button>
                                <button className="button-3" openLinkInNewTab={false}>
                                    CSV
                                </button>
                                <button className="button-4" openLinkInNewTab={false}>
                                    PDF
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="div-10" maxWidth={1200} lazyLoad={false}>
                        <section className="section-2">
                            <div data-missing-component="BuilderTabs" />
                            <button className="button-5" openLinkInNewTab={false}>
                                Save Data
                            </button>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Shipping;


import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import './Einstellungen.css';


    const AppEinstellungen = () => {
        return (
            <div className="create container">
                <form>
                    <h5>
                        4 Vertiefungen hinzufügen:
                    </h5>
                    <h6>
                        
                    </h6>

                    <Multiselect
                    displayValue="key"
                    class="chips"
                    onRemove={function noRefCheck(){}}
                    onSearch={function noRefCheck(){}}
                    onSelect={function noRefCheck(){}}
                    options={[
                        {
                        key: 'Bildverarbeitung',
                        
                        },
                        {
                        key: 'Produktion Audiovisueller Medien'
                        },
                        {
                        key: 'Web-Engineering'
                        },
                        {
                        key: 'Kameratechnik',
                        },
                        {
                        key: 'Mediengestaltung'
                        },
                        {
                        key: 'Mediendistribution'
                        },
                        {
                        key: 'Computergrafik'
                        }
                    ]}
                    style={{
                        chips: {
                          background: '#ef814c'
                        },
                       
                        multiselectContainer: {
                          color: '#bd5aa1'
                        },
                        searchBox: {
                          border: 'none',
                          'border-bottom': '1px solid black',
                          'border-radius': '0px'
                        }
                      }}
                    selectionLimit={4}
                    />
                </form>
                    <div>
                        <button type="button" class="btn btn-secondary buttonplace">Bestätigen</button>
                    </div>
            </div>

                    )
                }


export default AppEinstellungen;
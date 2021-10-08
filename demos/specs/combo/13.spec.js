context("1: Combo", () => {
    context("1.5", () => {
        test("3:Inline Tooltips", () => {
            bela
                .ready('/w2ui/demos/#/combo/13')
                .let({
                    '@box1': '#example_view #span1 > span',
                    '@box2': '#example_view #span2 > span',
                    '@grid1': '#grid_grid_records span:contains(move over me)'
                })
                .begin('First box')
                    .get('@box1').tag('Left box')
                    .trigger('mouseenter')
                    .wait('#w2ui-tag-noid', 'to.appear')
                    .get('#w2ui-tag-noid .w2ui-tag-body')
                    .should({
                        'have.class': 'w2ui-light',
                        'contain.text': 'contain any html',
                        'not.contain.text': 'Light theme'
                    })
                    .get('@box1').tag('Left box')
                    .trigger('mouseleave')
                    .wait('#w2ui-tag-noid', 'to.disappear')
                .end()
                .begin('Second box')
                    .get('@box2').tag('Right box')
                    .trigger('mouseenter')
                    .wait('#w2ui-tag-noid', 'to.appear')
                    .get('#w2ui-tag-noid .w2ui-tag-body')
                    .should({
                        'not.have.class': 'w2ui-light',
                        'contain.text': 'contain any html',
                        'not.contain.text': 'Old dark theme'
                    })
                    .get('@box1').tag('Left box')
                    .trigger('mouseleave')
                    .wait('#w2ui-tag-noid', 'to.disappear')
                .end()
                .begin('Grid tooltip')
                    .get('@grid1').tag('All tooltips')
                    .trigger('mouseenter', { delay: 15, multiple: true })
                    .get('.w2ui-tag')
                    .should('have.length', 18)
                    .get('@grid1').tag('All tooltips')
                    .trigger('mouseleave', { delay: 1, multiple: true })
                    .if('.w2ui-tag', event => {
                        bela.error('Tags did not hide')
                    })
                .end()
        })

    })
})
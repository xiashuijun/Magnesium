package net.onebean.mngt.portal.common;

public enum  BindingKeyNameEnum {


            ;

    private String name;

    BindingKeyNameEnum(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}